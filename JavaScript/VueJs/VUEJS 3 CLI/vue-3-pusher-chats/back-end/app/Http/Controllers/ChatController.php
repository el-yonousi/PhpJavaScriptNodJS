<?php

namespace App\Http\Controllers;

use App\Events\Message;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    public function store(Request $request)
    {

        $chat = Chat::create([
            'username' => $request->username,
            'message' => $request->message,
        ]);

        event(new Message($chat));
    }
}
