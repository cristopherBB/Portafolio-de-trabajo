import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-briefcase-v2',
  templateUrl: './briefcase-v2.component.html',
  styleUrls: ['./briefcase-v2.component.scss']
})
export class BriefcaseV2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function reveal() {

  animate(".textAbout",10, "animate__fadeInUp")
  animate(".works",30, "animate__fadeInLeft")
  animate(".github",30, "animate__fadeInUp")
  animate(".contact_list", 30, "animate__fadeInRight")

}

function animate(classType: string, visible: number, efect: string){
  var reveals = document.querySelector(classType);
  var windowHeight = window.innerHeight;
  var elementTop = reveals!.getBoundingClientRect().top;
  var elementVisible = visible;
  if (elementTop < windowHeight - elementVisible) {
    reveals!.classList.add("animate__animated", efect);
  } else {
    reveals!.classList.remove("animate__animated", efect);
  }
}

window.addEventListener("scroll", reveal);
