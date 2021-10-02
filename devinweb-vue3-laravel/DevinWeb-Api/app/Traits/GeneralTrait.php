<?php

namespace App\Traits;

trait GeneralTrait
{
    public function error($message, $errorNumber)
    {
        return response()->json([
            'status' => false,
            'errorNumber' => $errorNumber,
            'message' => $message
        ]);
    }

    public function success($message)
    {
        return [
            'status' => true,
            'message' => $message
        ];
    }

    public function data($key, $value, $message = '')
    {
        return response()->json([
            'status' => true,
            'message' => $message,
            'errorNumber' => '000',
            $key => $value
        ]);
    }

    public function returnValidationError($code, $validator)
    {
        return $this->error($code, $validator->errors()->first());
    }


    public function returnCodeAccordingToInput($validator)
    {
        $inputs = array_keys($validator->errors()->toArray());
        $code = $this->getErrorCode($inputs[0]);
        return $code;
    }

    public function getErrorCode($input)
    {
        if ($input == "name")
            return 'E001';

        else if ($input == "password")
            return 'E002';

        else if ($input == "email")
            return 'E003';
        else if ($input == "school_id")
            return 'E003';
        else
            return "";
    }
}
