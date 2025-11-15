import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePtBrComponent } from './resume-pt-br';

describe('ResumePtBr', () => {
  let component: ResumePtBrComponent;
  let fixture: ComponentFixture<ResumePtBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumePtBrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumePtBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
