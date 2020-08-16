import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Testyso01SharedModule } from 'app/shared/shared.module';
import { Testyso01CoreModule } from 'app/core/core.module';
import { Testyso01AppRoutingModule } from './app-routing.module';
import { Testyso01HomeModule } from './home/home.module';
import { Testyso01EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Testyso01SharedModule,
    Testyso01CoreModule,
    Testyso01HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Testyso01EntityModule,
    Testyso01AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Testyso01AppModule {}
