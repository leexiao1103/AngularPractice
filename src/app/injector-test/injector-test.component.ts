import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-injector-test',
  templateUrl: './injector-test.component.html',
  styleUrls: ['./injector-test.component.css']
})
export class InjectorTestComponent implements OnInit, OnChanges {
  nullTest: Hero;
  input: String;
  show = true;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChange');
  }

  ngOnInit() {

  }

  clickMe(input: string): void {
    console.log(input);
  }

}
