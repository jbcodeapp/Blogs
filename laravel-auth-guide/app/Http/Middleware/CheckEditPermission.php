<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Gate;

class CheckEditPermission
{
    public function handle($request, Closure $next)
    {
        // Check if the user is authorized to edit the requested resource
        if (Gate::allows('edit-post', $request->post)) {
            return $next($request); // User is authorized, proceed with the request
        }

        abort(403); // User is not authorized, return a 403 Forbidden response
    }
}
