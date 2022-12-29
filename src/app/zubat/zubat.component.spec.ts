import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZubatComponent } from './zubat.component';

describe('ZubatComponent', () => {
  let component: ZubatComponent;
  let fixture: ComponentFixture<ZubatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZubatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZubatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
