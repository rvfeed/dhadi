import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("move") move: ElementRef;
  showIncr: number = 0;
  showHtml: string = "<span style='color: red'>hi</span>"
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.data['res'])
    this.showIncr = this.router.snapshot.data['res']
  }
  showInc(): void{
   let n =  this.showIncr++;
  }
  @HostListener('mousemove', ['$event'])
  hello(e){
   
  }
  
}
