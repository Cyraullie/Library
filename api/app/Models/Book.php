<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'volume',
        'author',
        'editor',
        'price',
        'type',
        'add_date',
        'img_name',
        'summary',
        'user_id',
        
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function borroweds(): HasMany
    {
        return $this->hasMany(Borrow::class);
    }
}
