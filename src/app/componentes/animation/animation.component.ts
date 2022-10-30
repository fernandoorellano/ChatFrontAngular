import { animate, animation, style, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildrenOutletContexts } from '@angular/router';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  // animations:[
  //   useAnimation
  // ]
})
export class AnimationComponent implements OnInit {

  constructor(private contexts: ChildrenOutletContexts) {}

  aanimation(){
    var fadeAnimation = animation([
      style({ opacity: '{{ start }}' }),
      animate('{{ time }}',
      style({ opacity: '{{ end }}'}))
      ],
      { params: { time: '1000ms', start: 0, end: 1 }});
 
      useAnimation(fadeAnimation, {
        params: {
          time: '2s',
          start: 1,
          end: 0
        }
      })
  
  }
  

  ngOnInit(): void {}

  scrollTo() {
    const elementList = document.querySelectorAll('.footer');
    const element = elementList[0] as HTMLElement;
  
    // window.scrollTo(0,0);
    element.scrollIntoView({ behavior: 'smooth', block: 'center'  });
  }

}
