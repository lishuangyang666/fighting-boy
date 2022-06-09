import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChildOneComponent } from './main-child-one.component';

describe('MainChildOneComponent', () => {
  let component: MainChildOneComponent;
  let fixture: ComponentFixture<MainChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
