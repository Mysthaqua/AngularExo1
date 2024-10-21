import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Fact from '../utils/models/fact.model.js';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getFact(): Observable<Fact> {
    return this.http.get<Fact>(this.apiUrl);
  }
}
