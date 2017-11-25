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

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ToolbarComponent,
        LogoComponent,
        AppSidebarComponent
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
