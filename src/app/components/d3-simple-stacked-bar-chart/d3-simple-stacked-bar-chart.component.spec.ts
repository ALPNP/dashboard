import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3SimpleStackedBarChartComponent } from './d3-simple-stacked-bar-chart.component';

describe('D3SimpleStackedBarChartComponent', () => {
  let component: D3SimpleStackedBarChartComponent;
  let fixture: ComponentFixture<D3SimpleStackedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3SimpleStackedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3SimpleStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
