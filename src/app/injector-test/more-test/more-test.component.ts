import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InjectorTestService } from '../injector-test.service';

@Component({
  selector: 'app-more-test',
  templateUrl: './more-test.component.html',
  styleUrls: ['./more-test.component.css']
})
export class MoreTestComponent implements OnInit, OnChanges {
  serviceId: string;

  constructor(private injectTestService: InjectorTestService) {
    console.log(`MoreTest Constructor get: ${this.giveMe}`);
  }

  @Input() giveMe;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log(`MoreTest ngOnInit get: ${this.giveMe}`);
    this.serviceId = this.injectTestService.id;
  }

}
