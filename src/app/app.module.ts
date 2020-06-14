import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import {AppComponent} from './app.component';
import {PageBodyComponent} from "./components/pagebody.component";
import {PageFooterComponent} from "./components/pagefooter.component";
import {PageHeaderComponent} from "./components/pageheader.component";
import {BrandingComponent} from "./components/branding.component";
import {IllustrationsComponent} from "./components/illustrations.component";
import {PaintingsComponent} from "./components/paintings.component";
import {UiUxComponent} from "./components/uiux.component";
import {appRoutingProviders, routing} from "./app.rounting";
import {MainComponent} from "./components/main.component";
import {SidebarComponent} from "./components/sidebar.component";
import {MoreInfoComponent} from "./components/more.component";
import {ImageSliderComponent} from "./components/imgslide.component";

@NgModule({
    declarations: [
        AppComponent,
        PageBodyComponent,
        PageFooterComponent,
        PageHeaderComponent,
        BrandingComponent,
        IllustrationsComponent,
        PaintingsComponent,
        UiUxComponent,
        MainComponent,
        SidebarComponent,
        MoreInfoComponent,
        ImageSliderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CarouselModule
    ],
    providers:
        [
            appRoutingProviders
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
