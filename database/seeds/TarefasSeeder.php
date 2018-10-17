<?php

use Illuminate\Database\Seeder;
use Illuminate\Validation\Factory;

class TarefasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Tarefas::class, 50)->create();

    }
}
