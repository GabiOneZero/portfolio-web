import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgermenuComponent } from './burgermenu.component';

describe('BurgermenuComponent', () => {
  let component: BurgermenuComponent;
  let fixture: ComponentFixture<BurgermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
