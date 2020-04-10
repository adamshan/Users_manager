<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
        		'firstname'=>'Adamu Shan',
        		'lastname'=>'Rukh Aliyu',
        		'email'=>'Adamushanrukh@gmail.com',
        		'login'=>'AdamShan',
        		'password'=>'adshrual2020',
        		'estAdmin'=>true
        ]);
    }
}
