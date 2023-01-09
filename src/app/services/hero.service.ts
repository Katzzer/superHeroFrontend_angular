import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../common/hero';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HeroCategory} from '../common/hero-category';
import {HeroPersonalData} from '../common/hero-personal-data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // private baseUrl = 'http://localhost:8080/api/';
  private baseUrl = 'https://pavelkostal-superheroapi-be.herokuapp.com/api/';

  private heroInformationUrl = this.baseUrl + 'hero-information';

  private categoryUrl = this.baseUrl + 'hero-name-list';

  private baseUrlForPublicAPI = this.baseUrl + 'superheroapi?hero=';

  constructor(private httpClient: HttpClient) { }

  getHeroList(theCategoryId: number): Observable<Hero[]> {
    const searchUrl = `${this.heroInformationUrl}/search/findByHeroNameId?id=${theCategoryId}`;


    return this.httpClient.get<GetResponseHeroes>(searchUrl).pipe(
      map(response => response._embedded.heroInformation)
    );
  }

  getHeroCategories(): Observable<HeroCategory[]> {

    return this.httpClient.get<GetResponseHeroCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.heroName)
  );
  }

  getHeroPersonalDataFromPublicAPI(currentHeroName: string): Observable<HeroPersonalData[]> {
    const searchUrlForPersonalData = `${this.baseUrlForPublicAPI}${currentHeroName}`;

    return this.httpClient.get<GetResponseHeroPersonalData>(searchUrlForPersonalData).pipe(
      map(response => response.results)
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

interface GetResponseHeroPersonalData {
  results: HeroPersonalData[];
}

