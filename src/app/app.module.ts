import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RoutingModule} from "./modules/routing/routing.module";
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LogoComponent} from './components/logo/logo.component';
import {AppSidebarComponent} from './components/app-sidebar/app-sidebar.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NumbersComponent } from './components/numbers/numbers.component';
import { NumbersLeftWidgetComponent } from './components/numbers-left-widget/numbers-left-widget.component';
import { D3SimpleStackedBarChartComponent } from './components/d3-simple-stacked-bar-chart/d3-simple-stacked-bar-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ToolbarComponent,
        LogoComponent,
        AppSidebarComponent,
        NumbersComponent,
        NumbersLeftWidgetComponent,
        D3SimpleStackedBarChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        NgxChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
