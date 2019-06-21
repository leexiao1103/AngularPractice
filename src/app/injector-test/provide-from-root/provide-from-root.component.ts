import { Component, OnInit } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-root',
  templateUrl: './provide-from-root.component.html',
  styleUrls: ['./provide-from-root.component.css']
})
export class ProvideFromRootComponent implements OnInit {

  serviceId: string;

  constructor(private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    this.serviceId = this.injectorTestService.id;
    this.injectorTestService.log(`ID: ${this.serviceId}, Take By ProvideFromRoot`);
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
