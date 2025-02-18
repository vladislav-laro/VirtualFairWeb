<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stand extends Model
{

    public function fair() {
        return $this->belongsTo('App\Fair');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function appointments()
    {
        return $this->hasMany('App\Appointment');
    }

    public function gallerys()
    {
        return $this->hasMany('App\Gallery');
    }

    public function portfolios()
    {
        return $this->hasMany('App\Portfolio');
    }

    public function files()
    {
        return $this->hasMany('App\File');
    }

    public function contact()
    {
        return $this->hasOne('App\Contact');
    }

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    public function stand_type()
    {
        return $this->belongsTo('App\StandType');
    }
    
    public function stand_location()
    {
        return $this->belongsTo('App\StandLocation');
    }

    public function contact_requests() {
        return $this->hasMany("App\ContactRequest");
    }

    public function stand_contents() {
        return $this->hasMany('App\StandContent');
    }


    public function business_cards() {
        return $this->hasMany('App\BusinessCard');
    }
    
    protected $guarded = ['fair_id', 'user_id'];
    protected $hidden = ['created_at', 'updated_at'];
    protected $attributes = ["status" => 0];
}
