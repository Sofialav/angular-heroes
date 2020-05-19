import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Christian' },
      { id: 12, name: 'Edric' },
      { id: 13, name: 'Orrin' },
      { id: 14, name: 'Sylvia' },
      { id: 15, name: 'Valeska' },
      { id: 16, name: 'Sorsha' },
      { id: 17, name: 'Tyris' },
      { id: 18, name: 'Lord Haart' },
      { id: 19, name: 'Catherine' },
      { id: 20, name: 'Roland' },
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
