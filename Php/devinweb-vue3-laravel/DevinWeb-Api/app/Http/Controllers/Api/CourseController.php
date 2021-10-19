<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Course;
use App\Models\Enroll;
use App\Models\User;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    use GeneralTrait;

    public function index(Request $request, $school_id)
    {
        $user = User::where([['email', $request->email], ['school_id', $school_id]])->first();

        //If the authenticated user is a student, return only courses he isenrolled in.
        if (!empty($user->student)) {
            $courses = Enroll::with('course')->where('student_id', $user->student->id)->get();

            $courses->makeHidden(["id", "school_id", "course_id", "student_id", "created_at", "updated_at"]);

            return $this->data('courses', $courses, 'student courses');
        }

        //If authenticated user is a teacher return all courses
        if (!empty($user->teacher)) {
            $courses = Course::where('school_id', $school_id)->get();

            return $this->data('courses', $courses, 'all courses');
        }
        return $this->error('your email ' . $request->email . ' not correct or you are not sing up', 'E001');
    }

    /**
     * Enroll in a course. The authenticated user should be a student and member of the school.
     */
    public function enroll(Request $request, $school_id, $course_id)
    {
        $checkCourse = Course::where([['school_id', $school_id], ['id', $course_id]])->first();

        if (empty($checkCourse))
            return $this->error('course not found in school', 'E001');

        $user = User::where([['email', $request->email], ['school_id', $school_id]])->first();

        if (!empty($user->student)) {
            $checkEnroll = Enroll::where([['school_id', $school_id], ['course_id', $course_id], ['student_id', $user->student->id]])->first();

            if (!empty($checkEnroll))
                return $this->error('this course already taken', 'E001');

            $enroll = new Enroll();

            $enroll->student_id = $user->student->id;
            $enroll->school_id = $school_id;
            $enroll->course_id = $course_id;
            $enroll->save();
            return $this->data('enroll', $enroll, 'enroll course for student '.$user->name);
        }

        return $this->error('your email ' . $request->email . ' incorrect or you are not sign up', 'E001');
    }
}
