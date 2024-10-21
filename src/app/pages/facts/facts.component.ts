import { Component } from '@angular/core';
import { FactsService } from '../../services/facts.service';
import Fact from '../../utils/models/fact.model';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css',
})
export class FactsComponent {
  fact: string = '';

  constructor(private factsService: FactsService) {
    this.getFact();
  }

  getFact(): void {
    this.factsService.getFact().subscribe((fact: Fact) => {
      this.fact = fact.value;
    });
  }
}
