import { Page404Component } from './comps/page404/page404.component';
import { AddcarComponent } from './comps/addcar/addcar.component';
import { MainComponent } from './comps/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component: MainComponent},
  {path:"", redirectTo:"/home", pathMatch: "full"},
  {path:"addcar", component: AddcarComponent},
  {path:"**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
