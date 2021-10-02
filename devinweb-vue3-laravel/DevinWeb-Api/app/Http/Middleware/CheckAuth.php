<?php

namespace App\Http\Middleware;

use App\Traits\GeneralTrait;
use Closure;
use Illuminate\Http\Request;

class CheckAuth
{
    use GeneralTrait;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->api_password !== env("API_PASSWORD", "HrIbKRienabblJC3IZbjyEzH6AZLA8JmtuB6RqD")) {

            return $this->error('you are not able to use this API, you must check the API password.', '404');
        }

        return $next($request);
    }
}
