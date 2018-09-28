import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 outgoing : string[] =['raja', 'bapu', 'boddu']
  constructor(private m: TestService) { }

  ngOnInit() {
    this.m.hii  = "mooo";
  }

}
