<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\School;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $gender = $faker->randomElement(['male', 'female']);

        foreach (range(1,10) as $index) {
            $school = new School();
            $school->name = $faker->sentence(10);
            $school->save();

            //5 Teachers (per school)
            for ($j = 0; $j < 5; $j++) {
                $user = new User();
                $user->name = $faker->name($gender);
                $user->email = $faker->unique()->safeEmail();
                $user->email_verified_at = now();
                $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
                $user->school_id = $school->id;
                $user->remember_token = Str::random(10);
                $user->save();

                $teacher = new Teacher();
                $teacher->user_id = $user->id;
                $teacher->school_id = $school->id;
                $teacher->save();

                //1 Course (per teacher)
                $course = new Course();
                $course->title = $faker->sentence(10);
                $course->description = Str::random(20);
                $course->school_id = $school->id;
                $course->teacher_id = $teacher->id;
                $course->save();
            }

            //10 Students (per school) (not enrolled in any course)
            for ($t = 0; $t < 10; $t++) {
                $user = new User();
                $user->name = $faker->name($gender);
                $user->email = $faker->unique()->safeEmail();
                $user->email_verified_at = now();
                $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password
                $user->school_id = $school->id;
                $user->remember_token = Str::random(10);
                $user->save();

                $student = new Student();
                $student->user_id = $user->id;
                $student->school_id = $school->id;
                $student->save();
            }
        }
    }
}
