import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolbatComponent } from './golbat.component';

describe('GolbatComponent', () => {
  let component: GolbatComponent;
  let fixture: ComponentFixture<GolbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolbatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
