import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderPageComponent } from './menu-order-page.component';

describe('MenuOrderPageComponent', () => {
  let component: MenuOrderPageComponent;
  let fixture: ComponentFixture<MenuOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
