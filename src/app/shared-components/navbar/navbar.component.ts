import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //@ViewChild('aboutID') aboutID: ElementRef | undefined;
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  about(){
    let element = document.getElementById("aboutID")
    element!.scrollIntoView({behavior: 'smooth'});
  }

  works(){
    let element = document.getElementById("worksID")
    element!.scrollIntoView({behavior: 'smooth'});
  }

  contact(){
    console.log("hola")
    let element = document.getElementById("contactID")
    element!.scrollIntoView({behavior: 'smooth'});
  }

}
