import { Component, OnInit, Optional } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-provide-from-service',
  templateUrl: './provide-from-service.component.html',
  styleUrls: ['./provide-from-service.component.css']
})
export class ProvideFromServiceComponent implements OnInit {
  serviceId: string;
  moduleServiceId: string;

  constructor(private injectorTestService: InjectorTestService, private moduleService: ModuleService) { }

  ngOnInit() {
    this.serviceId = this.injectorTestService.id;
    this.moduleServiceId = this.moduleService.id;
    this.injectorTestService.log(`ID: ${this.serviceId}, Take By ProvideFromService`);
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
