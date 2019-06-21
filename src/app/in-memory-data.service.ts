import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Monster } from './model/monster.model';
import { Hero } from './model/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'One Bunch Man', title: '', hp: 50000, mp: 5000, atk: 9999, def: 9999 },
      { id: 2, name: 'Magician', title: '', hp: 2000, mp: 5000, atk: 1500, def: 500 },
      { id: 3, name: 'Dark Knight', title: '', hp: 4000, mp: 1300, atk: 2500, def: 2000 },
      { id: 4, name: 'Iron Man', title: '', hp: 3000, mp: 1800, atk: 1200, def: 1600 },
      { id: 5, name: 'AK47', title: '', hp: 3800, mp: 50, atk: 1000, def: 1400 },
      { id: 6, name: 'Garbage', title: '', hp: 555, mp: 555, atk: 555, def: 555 },
      { id: 7, name: 'Mr.G', title: '', hp: 9, mp: 0, atk: 1, def: 1 },
      { id: 8, name: 'Super Man', title: '', hp: 500, mp: 500, atk: 1, def: 1 },
      { id: 9, name: 'Dog', title: '', hp: 100, mp: 10, atk: 10, def: 10 },
    ];

    const monsters: Monster[] = [
      { id: 1, name: 'Gogira', title: '', hp: 999999, mp: 99999, atk: 1000, def: 1000 },
      { id: 2, name: 'Hello Man', title: '', hp: 20000, mp: 500, atk: 700, def: 10 },
      { id: 3, name: 'Monster999', title: '', hp: 9999, mp: 999, atk: 99, def: 999 },
      { id: 4, name: 'Monster111', title: '', hp: 200, mp: 0, atk: 1, def: 1 },
      { id: 5, name: 'Monster10', title: '', hp: 100, mp: 0, atk: 10, def: 1 },
      { id: 6, name: 'Monster1', title: '', hp: 10, mp: 0, atk: 1, def: 0 },
    ];

    return { heroes, monsters };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
