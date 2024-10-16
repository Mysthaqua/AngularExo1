import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  cpt: number = 0;
  even: string = 'even';
  odd: string = 'odd';

  cptUp(): void {
    this.cpt++;
  }

  cptDown(): void {
    this.cpt--;
  }
}
