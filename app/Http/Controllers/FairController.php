<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fair;

class FairController extends Controller
{
    //

    public function all_fairs() {
        $res = array();
        $res["fairs"] = Fair::all();
        return response()->json($res);
    }

    public function fairs_year(Request $request, $year) {
        $res = array();
        if (!isset($year)) 
            $year = date("y");
        $res["year"] = $year;
        $res["fairs"] = Fair::where("opened_year",  $year)->get();
        return response()->json($res);
    }

    public function current_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function next_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", ">", $now] 
        ]; 
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function create_fair(Request $request) {
        $res = array();
        $fair = new Fair;
        $fair->name = $request->post("name");
        $fair->opened_year = $request->post("opened_year");
        $fair->start_date = $request->post("start_date");
        $fair->end_date = $request->post("end_date");
        $fair->save();

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_fair(Request $request, $id) {
        $res = array();
        $fair = Fair::whereId($id)->update($request->post());
        // $fair->name = $request->post("name");
        // $fair->opened_year = $request->post("opened_year");
        // $fair->start_date = $request->post("start_date");
        // $fair->end_date = $request->post("end_date");
        

        $res["status"] = "ok";
        return response()->json($res);
    }
}