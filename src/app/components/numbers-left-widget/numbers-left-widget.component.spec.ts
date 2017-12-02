import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersLeftWidgetComponent } from './numbers-left-widget.component';

describe('NumbersLeftWidgetComponent', () => {
  let component: NumbersLeftWidgetComponent;
  let fixture: ComponentFixture<NumbersLeftWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersLeftWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
