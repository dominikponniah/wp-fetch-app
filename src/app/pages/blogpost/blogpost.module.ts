import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogpostPageRoutingModule } from './blogpost-routing.module';

import { BlogpostPage } from './blogpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogpostPageRoutingModule
  ],
  declarations: [BlogpostPage]
})
export class BlogpostPageModule {}
