<?php

namespace App\Http\Middleware;

use App\Traits\GeneralTrait;
use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheackTeacherToken
{
    use GeneralTrait;

    public function handle(Request $request, Closure $next, $guard = null)
    {
        if ($guard != null) {
            auth()->shouldUse($guard);
            $token = $request->header('auth-token');
            $request->headers->set('auth-token', (string) $token, true);
            $request->headers->set('Authorization', 'Bearer ' . $token, true);
            try {
                $user = JWTAuth::parseToken()->authenticate();
            } catch (TokenExpiredException $ex) {
                return  $this->error($ex->getMessage(), $ex->getCode());
            } catch (JWTException $e) {

                return  $this->error('token_invalid' . $e->getMessage(), $ex->getCode());
            }
        }
        return $next($request);
    }
}
