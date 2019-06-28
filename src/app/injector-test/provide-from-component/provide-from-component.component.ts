import { Component, OnInit, OnDestroy } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-provide-from-component',
  templateUrl: './provide-from-component.component.html',
  styleUrls: ['./provide-from-component.component.css'],
  providers: [InjectorTestService]
})
export class ProvideFromComponentComponent implements OnInit, OnDestroy {

  serviceId: string;

  constructor(private injectorTestService: InjectorTestService) { }

  ngOnInit() {
    console.log('Component Oninit~~~~');
    this.serviceId = this.injectorTestService.id;
    this.injectorTestService.log(`ID: ${this.serviceId}, Take By ProvideFromComponent`)
  }

  ngOnDestroy(): void {
    console.log('Component Destroy~~~~');
  }

  change(input: string): void {
    this.injectorTestService.testValue = input;
  }

}
