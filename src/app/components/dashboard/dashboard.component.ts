import {Component, OnInit} from '@angular/core';
import {multi, single} from './data';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = false;
    xAxisLabel = 'Country';
    showYAxisLabel = false;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#d7a9df', '#e9448d']
    };

    // line, area
    autoScale = true;

    constructor() {
        Object.assign(this, {single, multi});
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
    }

}
