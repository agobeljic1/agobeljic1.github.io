import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  titles = ['✋', 'ADNAN GOBELJIC', 'PORTFOLIO', 'OPEN 2 WORK', '😇'];
  currentIndex = 0;
  isMobile = false;

  titleChangeInterval = null;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.handleTitleChange();
    this.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  }

  ngOnDestroy(): void {
    clearInterval(this.titleChangeInterval);
  }

  handleTitleChange() {
    this.titleChangeInterval = setInterval(() => {
      this.titleService.setTitle(this.titles[this.currentIndex]);
      this.currentIndex++;
      if (this.currentIndex == this.titles.length) {
        this.currentIndex = 0;
      }
    }, 1000);
  }
}
