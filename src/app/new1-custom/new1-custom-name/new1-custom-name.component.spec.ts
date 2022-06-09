import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New1CustomNameComponent } from './new1-custom-name.component';

describe('New1CustomNameComponent', () => {
  let component: New1CustomNameComponent;
  let fixture: ComponentFixture<New1CustomNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ New1CustomNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(New1CustomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
