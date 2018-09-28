import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  providers: [TestService]
})
export class AboutusComponent implements OnInit {

  constructor(private n: TestService) { }

  ngOnInit() {
    console.log(this.n.hii)
  }

}
