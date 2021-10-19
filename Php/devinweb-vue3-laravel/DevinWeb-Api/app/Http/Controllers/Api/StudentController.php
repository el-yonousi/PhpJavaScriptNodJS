<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use App\Traits\GeneralTrait;
use Error;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    use GeneralTrait;

    public function store(Request $request, $school_id)
    {
        $validator = Validator::make($request->all(), $this->rules(), $this->messages());

        if ($validator->fails()) {
            $code = $this->returnCodeAccordingToInput($validator);
            return $this->returnValidationError($code, $validator);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->email_verified_at = now();
        $user->password = Hash::make($request->password);
        $user->school_id = $school_id;
        $user->remember_token = Str::random(10);
        $user->save();

        $student = new Student();
        $student->user_id = $user->id;
        $student->school_id = $school_id;
        $student->save();

        return $this->data('student', $student, 'student was add successflly');
    }

    protected function rules()
    {
        return [
            'name' => 'required|max:20',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|regex:/(?=.*?[0-9])(?=.*?[A-Z]).+/',
        ];
    }

    protected function messages()
    {
        return [
            'name.required' => 'the field :attribute is required'
        ];
    }
}
