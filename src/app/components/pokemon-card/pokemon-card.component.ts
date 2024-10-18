import { Component, EventEmitter, Input, Output } from '@angular/core';
import Pokemon from '../../utils/classes/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() onRemove = new EventEmitter<Pokemon>();

  randomImg: string = `https://lorempokemon.fakerapi.it/pokemon/200/${Math.random()}`;

  removePokemon(): void {
    this.onRemove.emit(this.pokemon);
  }
}
