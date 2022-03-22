import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetCakeComponent } from './sweet-cake.component';

describe('SweetCakeComponent', () => {
  let component: SweetCakeComponent;
  let fixture: ComponentFixture<SweetCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
