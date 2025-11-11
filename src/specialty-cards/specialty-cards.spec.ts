import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyCards } from './specialty-cards';

describe('SpecialtyCards', () => {
  let component: SpecialtyCards;
  let fixture: ComponentFixture<SpecialtyCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtyCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialtyCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
