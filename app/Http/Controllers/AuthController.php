<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validator;
use App\User;
use App\Fair;
use App\CategoryInterest;
use Carbon\Carbon;
// use App\Traits\ZoomController;

class AuthController extends Controller
{
    // use ZoomController;
    
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required|min:8',
            'company' => 'required',
            'address' => 'required',
            'country' => 'required',
            'region' => 'required',
            'email' => 'required|email',
            'password'  => 'required|min:8',
            'type'  => 'required'
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ]);
        }

        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now],
            ["status", "=", 1]
        ]; 
        $fair = Fair::where($query)->first();
        $cnt = User::where(["fair_id"=>$fair->id, "email" => $request->post('email')])->count();
        if ($cnt != 0) {
            return response()->json(["status" => "already_exist"]);
        }
        
        $user = new User;
        $user->first_name = $request->post('first_name');
        $user->last_name = $request->post('last_name');
        $user->phone = $request->post('phone');
        $user->address = $request->post('address');
        $user->company = $request->post('company');
        $user->country = $request->post('country');
        $user->region = $request->post('region');
        $user->email = $request->post('email');
        $user->type = $request->post('type');
        $user->fair_id = $fair->id;
        $user->password = bcrypt($request->post('password'));
        if (isset($request->avatar_file)) {
            $b_fileName =  md5(time()).'.'.$request->avatar_file->extension();  
            $request->avatar_file->move(public_path('fair_image'), $b_fileName);
            $user->avatar = $b_fileName;
        }

        $user->save();
        $cat_interests = $request->post('category_interest');
        if (isset($cat_interests)) {
            foreach ($cat_interests as $cat) {
                $cat_int = new CategoryInterest;
                $cat_int->user_id = $user->id;
                $cat_int->category_id = $cat;
                $cat_int->save();
            }
        }
        // ZoomController::create_user($request);
        return response()->json(['status' => 'ok', 'interest' => $cat_interests], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now],
            ["status", "=", 1]
        ]; 
        $fair = Fair::where($query)->first();
        if (!isset($fair)) {
            return response()->json(["status"=> "unknown_fair"]);
        }
        if (!Auth::attempt(["email"=> $request->post("email"), "password"=>$request->post("password"), "fair_id" => $fair->id]))
            return response()->json(['error' => 'Unauthorized']);

        $user = $request->user();
        $user->load(['category_interests' => function($qr){
            $qr->with('category')->get();
        }]);
        $tokenResult = $user->createToken('Virtual Fair Web Api Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        
        $token->save();
        return response()->json([
            'user' => $user,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
        
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
  
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function save(Request $request)
    {
        $v = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required|min:8',
            'company' => 'required',
            'address' => 'required',
            'country' => 'required',
            'region' => 'required',
            'email' => 'required|email'
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }
        
        $user = $request->user();
        $user->first_name = $request->post('first_name');
        $user->last_name = $request->post('last_name');
        $user->phone = $request->post('phone');
        $user->address = $request->post('address');
        $user->company = $request->post('company');
        $user->country = $request->post('country');
        $user->region = $request->post('region');
        $user->email = $request->post('email');
        $user->type = $request->post('type');
        if ($request->post('password') != '')
            $user->password = bcrypt($request->post('password'));

        if (isset($request->avatar_file)) {
            $b_fileName = md5(time()).'.'.$request->avatar_file->extension();  
            $request->avatar_file->move(public_path('fair_image'), $b_fileName);
            $user->avatar = $b_fileName;
        }
            
        $user->save();
        unset($user->password);
        
        return response()->json(['status' => 'ok', 'user'=> $user], 200);
    }

}
