import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add", component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
