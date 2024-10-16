import { Component } from '@angular/core';
import { SortPipe } from '../../utils/pipes/sort.pipe';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SortPipe],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  series: string[] = ['bonjour', 'au revoir', 'oui', 'non', 'ouioui'];
  order: string = 'asc';

  removeSerie(i: number): void {
    this.series = this.series.filter((serie, index) => index !== i);
  }

  sortASC(): void {
    this.order = 'asc';
  }

  sortDESC(): void {
    this.order = 'desc';
  }
}
