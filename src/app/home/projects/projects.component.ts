import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = projects;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const projects = document.querySelectorAll('.projects__project');
    gsap.from(projects, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projects,
        start: 'center bottom',
        end: 'center center',
        scrub: 2,
      },
    });
  }
}
