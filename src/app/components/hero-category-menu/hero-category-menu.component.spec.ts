import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCategoryMenuComponent } from './hero-category-menu.component';

describe('HeroCategoryMenuComponent', () => {
  let component: HeroCategoryMenuComponent;
  let fixture: ComponentFixture<HeroCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
