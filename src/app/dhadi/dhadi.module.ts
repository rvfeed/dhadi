import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhadiComponent } from './dhadi/dhadi.component';
import { Routes, RouterModule } from '@angular/router';
import { DhadiDirective } from './directives/dhadi.directive';
import { DhadiService } from './services/dhadi.service';
import { DyeDirective } from './directives/dye.directive'
import { UserService } from './services/user.service';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';
const dhadiRoutes: Routes = [
  { path: 'dhadi', component: DhadiComponent}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dhadiRoutes)
  ],
  exports: [RouterModule],
  declarations: [DhadiComponent, DyeDirective, DhadiDirective],
  providers: [DhadiService, UserService,SocketService]
})
export class DhadiModule { }
