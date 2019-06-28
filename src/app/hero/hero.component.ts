import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../injector-test/module.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  moduleServiceId: string;
  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.moduleServiceId = this.moduleService.id;
  }

}
