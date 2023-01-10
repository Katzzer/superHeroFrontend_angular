import { Component, OnInit } from '@angular/core';
import {HeroCategory} from '../../common/hero-category';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-hero-category-menu',
  templateUrl: './hero-category-menu.component.html',
  styleUrls: ['./hero-category-menu.component.scss', 'hero-category-menu-link-style.component.scss']
})
export class HeroCategoryMenuComponent implements OnInit {

  heroCategories: HeroCategory[] | undefined;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.listNameCategories();
  }

  listNameCategories() {
    this.heroService.getHeroCategories().subscribe(
      data => {
        console.log('Hero Categories=' + JSON.stringify(data));
        this.heroCategories = data;
      }
    );
  }
}
