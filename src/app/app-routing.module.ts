import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringBootBodyComponent } from './spring-boot-body/spring-boot-body.component';
import { SpringSecurityBodyComponent } from './spring-security-body/spring-security-body.component';

const routes: Routes = [
  {
    path:"spring-boot",
    component:SpringBootBodyComponent,
    pathMatch:"full"
  },
  {
    path:"spring-security",
    component:SpringSecurityBodyComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
