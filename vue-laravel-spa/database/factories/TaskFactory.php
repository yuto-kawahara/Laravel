<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'title' => $this->faker->realText(50),
            'content' => $this->faker->realText(200),
            'person_in_charge' => $this->faker->realText(100),
        ];
    }
}
