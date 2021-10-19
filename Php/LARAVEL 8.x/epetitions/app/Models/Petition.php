<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Petition extends Model
{
    use HasFactory;

    /**
     * The fillable property is the list of fields that we can allow mass assignment
     * use the fillable property when have small number of fields
     * must use an array
     */
    protected $fillable = ['title', 'description', 'category', 'author', 'signees'];

    /**
     * the guarded property is the list of fields that cannot be mass assigned.
     * use the fillable property when have large number of fields
     */
    // protected $guarded;
}
