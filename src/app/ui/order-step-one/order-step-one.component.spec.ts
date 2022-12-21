import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStepOneComponent } from './order-step-one.component';

describe('OrderStepOneComponent', () => {
  let component: OrderStepOneComponent;
  let fixture: ComponentFixture<OrderStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
