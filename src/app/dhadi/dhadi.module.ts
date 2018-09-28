import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhadiComponent } from './dhadi/dhadi.component';
import { Routes, RouterModule } from '@angular/router';
import { DhadiDirective } from './directives/dhadi.directive';
import { DhadiService } from './services/dhadi.service';
const dhadiRoutes: Routes = [
  { path: 'dhadi', component: DhadiComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dhadiRoutes)
  ],
  exports: [RouterModule],
  declarations: [DhadiComponent, DhadiDirective],
  providers: [DhadiService]
})
export class DhadiModule { }
