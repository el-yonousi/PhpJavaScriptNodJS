<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function enroll()
    {
        return $this->hasMany(Enroll::class, 'course_id', 'id');
    }
}
