import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDcCarouselComponent } from './heroes-dc-carousel.component';

describe('HeroesDcCarouselComponent', () => {
  let component: HeroesDcCarouselComponent;
  let fixture: ComponentFixture<HeroesDcCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesDcCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroesDcCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
