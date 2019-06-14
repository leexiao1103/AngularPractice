import { Component, OnInit } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-module',
  templateUrl: './provide-from-module.component.html',
  styleUrls: ['./provide-from-module.component.css']
})
export class ProvideFromModuleComponent implements OnInit {
  testValue: string;

  constructor(private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    this.testValue = this.injectorTestService.getTestValue;
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
