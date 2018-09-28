import { Component, Inject } from '@angular/core';
import { ExtraService } from './services/extra.service'
import { HttpClient } from '@angular/common/http';
import { TestService } from './services/test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private ser: ExtraService, private j : TestService){

  }
  ngOnInit(){
    this.j.hii = "byeee";
    this.ser.getData().subscribe(console.log)
  }
  
}
