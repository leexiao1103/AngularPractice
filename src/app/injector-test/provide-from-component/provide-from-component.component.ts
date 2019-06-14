import { Component, OnInit } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-component',
  templateUrl: './provide-from-component.component.html',
  styleUrls: ['./provide-from-component.component.css'],

})
export class ProvideFromComponentComponent implements OnInit {
  testValue: string;

  constructor(private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    this.testValue = this.injectorTestService.getTestValue;
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
