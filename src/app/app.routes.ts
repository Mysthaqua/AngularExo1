import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibraryComponent } from './pages/library/library.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { FactsComponent } from './pages/facts/facts.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: 'facts',
    component: FactsComponent,
  },
];
