import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Sadhinchu} from './lib/resolve/sadhinchu'
import { ExtraService } from './services/extra.service'
import { TestService } from './services/test.service'
import { HttpClientModule } from '@angular/common/http';
import { InnerComponent } from './contactus/inner/inner.component';
import { DhadiModule } from './dhadi/dhadi.module';

export const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, resolve: { res: Sadhinchu}},
  {path: 'aboutus', component: AboutusComponent, outlet: 'side'},
  {path: 'contactus', component: ContactusComponent}  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent,
    InnerComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DhadiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Sadhinchu, ExtraService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
