import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMainComponent } from './custom-main.component';

describe('CustomMainComponent', () => {
  let component: CustomMainComponent;
  let fixture: ComponentFixture<CustomMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
