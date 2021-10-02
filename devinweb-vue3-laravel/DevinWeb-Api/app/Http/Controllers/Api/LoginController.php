<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\GeneralTrait;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    use GeneralTrait;

    public function login(Request $request, $school_id)
    {
        try {
            $validator = Validator::make($request->all(), $this->rules());

            if ($validator->fails()) {
                $code = $this->returnCodeAccordingToInput($validator);
                return $this->returnValidationError($code, $validator);
            }


            $credentials = $request->only(['email', 'password']);

            $token = Auth::guard('user-api')->attempt($credentials);

            if (!$token)
                return $this->error('email or password incorrect', '404');

            $user = Auth::guard('user-api')->user();
            $user->api_token = $token;

            if ($user->school_id <> $school_id)
                return $this->error('you are not sign up in this school' . $user->school_id . ' ' . $school_id, '404');

            //login as student
            if (!empty($user->student)) {
                return $this->data('user_student', $user, 'You are logged in successfully, as a student');
            }

            //login as teacher
            if (!empty($user->teacher)) {
                return $this->data('user_teacher', $user, 'You are logged in successfully, as a teacher');
            }
        } catch (Exception $ex) {
            return $this->error($ex->getMessage(), $ex->getCode());
        }
    }

    protected function rules()
    {
        return [
            'email' => 'required',
            'password' => 'required',
        ];
    }
}
