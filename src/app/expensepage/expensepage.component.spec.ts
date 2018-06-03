import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensepageComponent } from './expensepage.component';

describe('ExpensepageComponent', () => {
  let component: ExpensepageComponent;
  let fixture: ComponentFixture<ExpensepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
