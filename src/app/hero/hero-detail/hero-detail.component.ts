import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from '../hero.service';
import { Hero } from 'src/app/model/hero.model';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  oriName: String;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.route.params
      .pipe(
        tap(_ => this.hero = null),
        switchMap((params: Params) => this.heroService.getHero(+params.id))
      )
      .subscribe(hero => {
        this.oriName = hero.name;
        this.hero = hero;
      });

    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
