import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {MainComponent} from "./components/main.component";
import {UiUxComponent} from "./components/uiux.component";
import {PaintingsComponent} from "./components/paintings.component";
import {BrandingComponent} from "./components/branding.component";
import {IllustrationsComponent} from "./components/illustrations.component";



const appRoutes: Routes = [
    { path: 'paintings', component: PaintingsComponent },
    { path: 'branding', component: BrandingComponent},
    { path: 'illustrations', component: IllustrationsComponent},
    { path: 'uiux', component: UiUxComponent},
    { path: '**', component: MainComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
