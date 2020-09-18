import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/common/hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  currentCategoryId: number;


  constructor(private heroService: HeroService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listHeroes();
    });
  }

  listHeroes() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    this.heroService.getHeroList(this.currentCategoryId).subscribe(
      data => {
        this.heroes = data;
      }
    );
  }
}
