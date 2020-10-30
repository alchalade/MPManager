<?php

namespace App\Models;

use App\MenuItems;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SubMenuItems extends BaseModel
{
    public function menuItems(): BelongsTo
    {
        return $this->belongsTo(MenuItems::class);
    }
}
