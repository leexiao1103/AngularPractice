import { Component, OnInit, Optional } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-service',
  templateUrl: './provide-from-service.component.html',
  styleUrls: ['./provide-from-service.component.css']
})
export class ProvideFromServiceComponent implements OnInit {
  serviceId: string;

  constructor(@Optional() private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    this.serviceId = this.injectorTestService.id;
    this.injectorTestService.log(`ID: ${this.serviceId}, Take By ProvideFromService`);
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
