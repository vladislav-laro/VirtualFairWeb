<?php

namespace App\Http\Middleware;

use Closure;

class SuperAdminMiddleware
{
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if (!isset($user)) {
            return response()->json(["status" => "not_admin"]);
        }
        if ( $user->role !== 'super' ) {
            return response()->json(["status" => "not_admin"]);
        }
        
        return $next($request);
    }
}