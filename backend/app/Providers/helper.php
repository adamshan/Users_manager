<?php 

	namespace App;

use Illuminate\Database\Eloquent\Model;

class helper extends Model
{
    
    public function scopelistuserbystatus($query,$status){
        return $query->where('isadmin','=',$status)->get();
    }

    public function scopelistadmin($query){
        return $query->where('isadmin','=','true')->get();
    }
    

    public function scopedeluser($query,$id){
        return $query->where('id',$id)->delete();
    }

    
}

 ?>