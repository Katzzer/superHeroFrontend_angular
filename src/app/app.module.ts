import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HeroService } from './services/hero.service';

import { Routes, RouterModule } from '@angular/router';
import { HeroCategoryMenuComponent } from './components/hero-category-menu/hero-category-menu.component';
import { SpinningCircleComponent } from './spinning-circle/spinning-circle.component';
const routes: Routes = [
  {path: 'category/:id/:name', component: HeroListComponent},
  {path: 'category', component: HeroListComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', redirectTo: '/heroes', pathMatch: 'full'},
];

@NgModule({ declarations: [
        AppComponent,
        HeroListComponent,
        HeroCategoryMenuComponent,
        SpinningCircleComponent
    ],
    bootstrap: [AppComponent], imports: [RouterModule.forRoot(routes),
        BrowserModule], providers: [HeroService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
