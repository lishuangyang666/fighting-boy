import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New1CustomComponent } from './new1-custom.component';

describe('New1CustomComponent', () => {
  let component: New1CustomComponent;
  let fixture: ComponentFixture<New1CustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ New1CustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(New1CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
