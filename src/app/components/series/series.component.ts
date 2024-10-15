import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  series: string[] = ['Serie1', 'Serie2'];

  removeSerie(i: number): void {
    this.series = this.series.filter((serie, index) => index !== i);
  }
}
