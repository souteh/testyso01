import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Testyso01SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Testyso01SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Testyso01HomeModule {}
