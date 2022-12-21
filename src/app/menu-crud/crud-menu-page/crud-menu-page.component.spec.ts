import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMenuPageComponent } from './crud-menu-page.component';

describe('CrudMenuPageComponent', () => {
  let component: CrudMenuPageComponent;
  let fixture: ComponentFixture<CrudMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
