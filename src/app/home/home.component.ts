import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MarqueeItem } from '../interfaces/marquee-item';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clients, skills } from './home.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  iconsFolder = 'assets/icons/';
  clientsFolder = 'assets/brands/';
  skills: MarqueeItem[] = skills;
  clients: MarqueeItem[] = clients;

  constructor(private ElementRef: ElementRef) {}

  ngAfterViewInit() {
    const icons = document.querySelectorAll('.icons__icon');
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(icons, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: icons,
        start: 'center bottom',
        end: 'center center',
        scrub: 2,
      },
    });

    setTimeout(() => {
      gsap.to(this.ElementRef.nativeElement, {
        opacity: 1,
        ease: 'Circ.easeOut',
        duration: 1.5,
      });
    }, 1000);
  }
}
