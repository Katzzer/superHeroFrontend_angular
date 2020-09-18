import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../common/hero';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HeroCategory} from '../common/hero-category';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl = 'http://localhost:8080/api/hero-information';

  private categoryUrl = 'http://localhost:8080/api/hero-name-list';

  constructor(private httpClient: HttpClient) { }

  getHeroList(theCategoryId: number): Observable<Hero[]> {
    const searchUrl = `${this.baseUrl}/search/findByHeroNameId?id=${theCategoryId}`;


    return this.httpClient.get<GetResponseHeroes>(searchUrl).pipe(
      map(response => response._embedded.heroInformation)
    );
  }

  getHeroCategories(): Observable<HeroCategory[]> {

    const data = this.httpClient.get<GetResponseHeroCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.heroName));

    console.log('DATA: ' + JSON.stringify(data));

    return this.httpClient.get<GetResponseHeroCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.heroName)
  );
  }
}

interface GetResponseHeroes {
  _embedded: {
    heroInformation: Hero[];
  };
}

interface GetResponseHeroCategory {
  _embedded: {
    heroName: HeroCategory[];
  };
}

