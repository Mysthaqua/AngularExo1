import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Pokemon from '../../utils/classes/Pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent {
  pokemons: Pokemon[];

  constructor() {
    this.pokemons = [
      new Pokemon(
        'Tibo',
        'Il est pas très bo mdr',
        ['normal', 'loser'],
        [
          {
            name: 'coup de boule',
            description: 'ça fait mal...',
            damages: 1000000,
          },
          {
            name: 'Flemme',
            description: 'Aucun effet... Bizarre...',
            damages: 1000000,
          },
        ],
        [{ name: 'Chez moi', region: "C'est le nooooord" }]
      ),
    ];
  }

  pokemon_form: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      types: new FormArray([new FormControl('')]),
      attacks: new FormArray([
        new FormGroup({
          name: new FormControl(''),
          description: new FormControl(''),
          damages: new FormControl(0),
        }),
      ]),
      areas: new FormArray([
        new FormGroup({
          name: new FormControl(''),
          region: new FormControl(''),
        }),
      ]),
    },
    [Validators.required]
  );

  get types(): FormArray {
    return this.pokemon_form.controls['types'] as FormArray;
  }

  addType(): void {
    this.types.push(new FormControl(''));
  }

  get attacks(): FormArray {
    return this.pokemon_form.controls['attacks'] as FormArray;
  }

  addAttack(): void {
    this.attacks.push(
      new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        damages: new FormControl(0),
      })
    );
  }

  get areas(): FormArray {
    return this.pokemon_form.controls['areas'] as FormArray;
  }

  addArea(): void {
    this.areas.push(
      new FormGroup({
        name: new FormControl(''),
        region: new FormControl(''),
      })
    );
  }

  save_pokemon(): void {
    if (this.pokemon_form.valid) {
      this.pokemons.push(
        new Pokemon(
          this.pokemon_form.value['name'],
          this.pokemon_form.value['description'],
          this.pokemon_form.value['types'],
          this.pokemon_form.value['attacks'],
          this.pokemon_form.value['areas']
        )
      );
      this.pokemon_form.reset();
    }
    console.log(this.pokemons);
  }

  removePokemon(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter((p) => p !== pokemon);
  }
}
