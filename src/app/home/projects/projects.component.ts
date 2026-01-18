import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project, projects } from './projects.data';
import { ProjectDetailsDialogComponent } from './project-details-dialog/project-details-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = projects;

  constructor(private dialog: MatDialog) {}

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

  openDetails(project: Project) {
    this.dialog.open(ProjectDetailsDialogComponent, {
      data: project,
      autoFocus: false,
      restoreFocus: true,
      panelClass: 'project-details-dialog-panel',
    });
  }
}
