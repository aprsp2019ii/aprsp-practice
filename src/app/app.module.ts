import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoziloComponent } from './priprema/vozilo/vozilo.component';
import { AutomobilComponent } from './priprema/automobil/automobil.component';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtiklComponent } from './component/artikl/artikl.component';
import { DobavljacComponent } from './component/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './component/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './component/stavka-porudzbine/stavka-porudzbine.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    AboutComponent,
    AuthorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
