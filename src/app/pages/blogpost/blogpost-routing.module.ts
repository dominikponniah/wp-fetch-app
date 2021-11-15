import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogpostPage } from './blogpost.page';

const routes: Routes = [
  {
    path: '',
    component: BlogpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogpostPageRoutingModule {}
