<?php

use Faker\Generator as Faker;
use App\Tarefas;

$factory->define(Tarefas::class, function (Faker $faker) {
    return [
        //
        "titulo" => $faker->text(20),
        "corpo" => $faker->text(40)
    ];
});
