import { Component, OnInit } from '@angular/core';
import { InjectorTestService } from 'src/app/injector-test/injector-test.service';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero/hero.service';
import { Hero } from 'src/app/model/hero.model';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  constructor(private heroService: HeroService, private injectorTestService: InjectorTestService, private router: Router) { }

  ngOnInit() {
  }

  changeValue(input: string): void {
    this.injectorTestService.id = input;
    this.router.navigate(['injector-test']);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.addHero({ name } as Hero).subscribe();
  }
}
