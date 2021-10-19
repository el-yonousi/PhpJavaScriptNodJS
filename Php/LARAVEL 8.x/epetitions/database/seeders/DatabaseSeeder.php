<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Petition;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(100)->create();
        Petition::factory(50)->create();
    }
}
