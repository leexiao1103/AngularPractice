import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Hero } from 'src/app/model/hero.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();

  targetId: string;
  heroes$: Observable<Hero[]>;

  constructor(private router: Router, private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      //每次發送延遲
      debounceTime(300),
      //直到跟上一次輸入不一樣才發送
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHero(term))
    );
  }

  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);

  }

  goSearch(id: string): void {
    this.router.navigate([`./detail/${id}`], { relativeTo: this.route });
  }
}
