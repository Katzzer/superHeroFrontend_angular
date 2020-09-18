import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './services/hero.service';

import { Routes, RouterModule } from '@angular/router';
import { HeroCategoryMenuComponent } from './components/hero-category-menu/hero-category-menu.component';
const routes: Routes = [
  {path: 'category/:id/:name', component: HeroListComponent},
  {path: 'category', component: HeroListComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', redirectTo: '/heroes', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroCategoryMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
