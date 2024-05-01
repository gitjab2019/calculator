import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisorComponent } from './visor/visor.component';
import { BotonComponent } from './boton/boton.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    BotonComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    AboutusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(myRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
