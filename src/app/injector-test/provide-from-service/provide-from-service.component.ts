import { Component, OnInit } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-service',
  templateUrl: './provide-from-service.component.html',
  styleUrls: ['./provide-from-service.component.css']
})
export class ProvideFromServiceComponent implements OnInit {
  testValue: string;

  constructor(private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    this.testValue = this.injectorTestService.getTestValue;
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
