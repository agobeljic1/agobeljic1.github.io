"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 1510:
/*!*************************************************!*\
  !*** ./src/app/UI/marquee/marquee.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarqueeComponent": () => (/* binding */ MarqueeComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = ["marqueeWrap"];
const _c1 = ["marqueeItem"];
function MarqueeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
  }
}
class MarqueeComponent {
  constructor() {
    this.items = Array(10).fill('OPEN TO WORK');
  }
  ngAfterViewInit() {
    this.getHostWidth();
    this.animate();
  }
  getHostWidth() {
    const allElements = this.marqueeItem.length;
    this.elWidth = this.marqueeItem.first.nativeElement.offsetWidth;
    this.hostWidth = this.marqueeWrap.nativeElement.offsetWidth;
    this.totalWidth = this.elWidth * allElements;
  }
  animate() {
    this.animation = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline();
    this.marqueeItem.forEach((itemRef, index) => {
      const item = itemRef.nativeElement;
      const mod = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.wrap(-this.elWidth, this.totalWidth - this.elWidth);
      // Set the elements position
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(item, {
        x: () => index * item.offsetWidth,
        top: '50%',
        y: '-50%'
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(item, {
        x: `+=${this.totalWidth}`,
        modifiers: {
          x: x => mod(parseFloat(x)) + 'px'
        },
        ease: 'none',
        duration: 40,
        repeat: -1,
        overwrite: 'auto',
        onComplete: () => gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(item, {
          x: index * item.offsetWidth
        }) // Reset the x position on each repeat
      });
    });
  }
}

MarqueeComponent.ɵfac = function MarqueeComponent_Factory(t) {
  return new (t || MarqueeComponent)();
};
MarqueeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MarqueeComponent,
  selectors: [["app-marquee"]],
  viewQuery: function MarqueeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.marqueeWrap = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.marqueeItem = _t);
    }
  },
  decls: 3,
  vars: 1,
  consts: [[1, "marquee-wrap"], ["marqueeWrap", ""], ["class", "marquee-item", 4, "ngFor", "ngForOf"], [1, "marquee-item"], ["marqueeItem", ""]],
  template: function MarqueeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarqueeComponent_div_2_Template, 3, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  border-top: 1px solid #474554;\n  border-bottom: 1px solid #474554;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  height: 148px;\n}\n[_nghost-%COMP%]   .marquee-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 200%;\n  transform: translateX(-100px);\n}\n[_nghost-%COMP%]   .marquee-item[_ngcontent-%COMP%] {\n  background-color: #323232;\n  position: absolute;\n  padding-right: 24px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  font-size: 3rem;\n  -webkit-text-fill-color: transparent; \n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: rgba(255, 255, 255, 0.3);\n  transform: skew(10deg);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvVUkvbWFycXVlZS9tYXJxdWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUNKO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQSxFQUFBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NzQ1NTQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc0NTU0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDIgKiAyNHB4ICsgMTAwcHgpO1xuXG4gIC5tYXJxdWVlLXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIH1cblxuICAubWFycXVlZS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogV2lsbCBvdmVycmlkZSBjb2xvciAocmVnYXJkbGVzcyBvZiBvcmRlcikgKi9cbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSgjZmZmLCAwLjMpO1xuICAgIHRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6462:
/*!*********************************************!*\
  !*** ./src/app/UI/mouse/mouse.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseComponent": () => (/* binding */ MouseComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mouse.service */ 7615);



class MouseComponent {
  constructor(elementRef, ms) {
    this.elementRef = elementRef;
    this.ms = ms;
    this.hasClass = false;
    this.isFirstMouseMove = true;
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(this.elementRef.nativeElement, {
      autoAlpha: 0
    });
  }
  ngAfterViewInit() {
    const mouse = this.elementRef.nativeElement,
      duration = 0.6,
      xTo = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.quickTo(mouse, 'x', {
        duration: duration,
        ease: 'power3'
      }),
      yTo = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.quickTo(mouse, 'y', {
        duration: duration,
        ease: 'power3'
      });
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(mouse, {
      xPercent: -50,
      yPercent: -50
    });
    window.addEventListener('mousemove', e => {
      if (this.isFirstMouseMove) {
        this.isFirstMouseMove = false;
        // Code to execute on the first mouse move event
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(this.elementRef.nativeElement, {
          scale: 1,
          autoAlpha: 1,
          duration: 1
        });
      } else {
        yTo(e.y);
        xTo(e.x);
      }
    });
    document.addEventListener('mouseleave', e => {
      this.isFirstMouseMove = true;
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(this.elementRef.nativeElement, {
        scale: 0,
        duration: 0.3
      });
    });
    this.ms.status$.subscribe(status => {
      if (status === 'open') {
        this.hasClass = true;
      } else {
        this.hasClass = false;
      }
    });
  }
}
MouseComponent.ɵfac = function MouseComponent_Factory(t) {
  return new (t || MouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mouse_service__WEBPACK_IMPORTED_MODULE_0__.MouseService));
};
MouseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MouseComponent,
  selectors: [["app-mouse"]],
  hostVars: 2,
  hostBindings: function MouseComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.hasClass);
    }
  },
  decls: 0,
  vars: 0,
  template: function MouseComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #c2185b;\n  mix-blend-mode: difference;\n  pointer-events: none;\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.open[_nghost-%COMP%] {\n  width: 75px;\n  height: 75px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvVUkvbW91c2UvbW91c2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2RkFBQTtBQUNGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2MyMTg1YiwgMSk7XG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxuICAgIGhlaWdodCAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJi5vcGVuIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7937:
/*!*************************************************!*\
  !*** ./src/app/UI/section/section.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionComponent": () => (/* binding */ SectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SectionComponent_h2_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
const _c0 = ["*"];
class SectionComponent {
  constructor() {
    this.title = '';
  }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) {
  return new (t || SectionComponent)();
};
SectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SectionComponent,
  selectors: [["app-section"]],
  inputs: {
    title: "title"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["class", "mat-headline-4 section-title", 4, "ngIf"], [1, "mat-headline-4", "section-title"]],
  template: function SectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectionComponent_h2_0_Template, 2, 1, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 1000px;\n  padding: 64px 24px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvVUkvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxTQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHBhZGRpbmc6IDY0cHggMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _UI_mouse_mouse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/mouse/mouse.component */ 6462);




function AppComponent_app_mouse_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mouse");
  }
}
class AppComponent {
  constructor() {
    this.isMobile = false;
  }
  ngOnInit() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 1,
  consts: [["outlet", "outlet"], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_app_mouse_2_Template, 1, 0, "app-mouse", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _UI_mouse_mouse_component__WEBPACK_IMPORTED_MODULE_0__.MouseComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/routing.module */ 6990);
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/material.module */ 8649);
/* harmony import */ var _home_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/landing/landing.component */ 4598);
/* harmony import */ var _home_landing_asset_asset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/landing/asset/asset.component */ 5800);
/* harmony import */ var _UI_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/section/section.component */ 7937);
/* harmony import */ var _UI_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI/marquee/marquee.component */ 1510);
/* harmony import */ var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/projects/projects.component */ 2635);
/* harmony import */ var _UI_mouse_mouse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI/mouse/mouse.component */ 6462);
/* harmony import */ var _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/mouseTracking.directive */ 3533);
/* harmony import */ var _home_projects_project_details_dialog_project_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/projects/project-details-dialog/project-details-dialog.component */ 5506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _modules_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _modules_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _home_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__.LandingComponent, _home_landing_asset_asset_component__WEBPACK_IMPORTED_MODULE_5__.AssetComponent, _UI_section_section_component__WEBPACK_IMPORTED_MODULE_6__.SectionComponent, _UI_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_7__.MarqueeComponent, _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__.ProjectsComponent, _home_projects_project_details_dialog_project_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ProjectDetailsDialogComponent, _UI_mouse_mouse_component__WEBPACK_IMPORTED_MODULE_9__.MouseComponent, _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_10__.MouseTrackingDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _modules_routing_module__WEBPACK_IMPORTED_MODULE_2__.RoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _modules_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule]
  });
})();

/***/ }),

/***/ 3533:
/*!*******************************************************!*\
  !*** ./src/app/directives/mouseTracking.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseTrackingDirective": () => (/* binding */ MouseTrackingDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_mouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/mouse.service */ 7615);


class MouseTrackingDirective {
  constructor(ms) {
    this.ms = ms;
  }
  onMouseLeave() {
    this.ms.setLastStatus('closed');
  }
  onMouseEnter() {
    this.ms.setLastStatus('open');
  }
}
MouseTrackingDirective.ɵfac = function MouseTrackingDirective_Factory(t) {
  return new (t || MouseTrackingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mouse_service__WEBPACK_IMPORTED_MODULE_0__.MouseService));
};
MouseTrackingDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MouseTrackingDirective,
  selectors: [["", "mouseTracking", ""]],
  hostBindings: function MouseTrackingDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function MouseTrackingDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      })("mouseenter", function MouseTrackingDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      });
    }
  }
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/ScrollTrigger */ 1573);
/* harmony import */ var _home_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.data */ 5167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ 4598);
/* harmony import */ var _UI_section_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/section/section.component */ 7937);
/* harmony import */ var _UI_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/marquee/marquee.component */ 1510);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 2635);
/* harmony import */ var _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/mouseTracking.directive */ 3533);













function HomeComponent_img_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invert", skill_r3.invert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.iconsFolder + skill_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", skill_r3.alt)("matTooltip", skill_r3.alt);
  }
}
function HomeComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", client_r4.href, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.clientsFolder + client_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", client_r4.alt)("matTooltip", client_r4.alt);
  }
}
function HomeComponent_div_47_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", cert_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("matTooltip", "Open credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cert_r5.title, " ");
  }
}
function HomeComponent_div_47_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cert_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cert_r5.title);
  }
}
function HomeComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HomeComponent_div_47_a_3_Template, 4, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HomeComponent_div_47_ng_template_4_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cert_r5.dateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cert_r5.url)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cert_r5.issuer);
  }
}
class HomeComponent {
  constructor(ElementRef) {
    this.ElementRef = ElementRef;
    this.iconsFolder = 'assets/icons/';
    this.clientsFolder = 'assets/brands/';
    this.skills = _home_data__WEBPACK_IMPORTED_MODULE_0__.skills;
    this.clients = _home_data__WEBPACK_IMPORTED_MODULE_0__.clients;
    this.certifications = _home_data__WEBPACK_IMPORTED_MODULE_0__.certifications;
    this.currentYear = new Date().getFullYear();
  }
  ngAfterViewInit() {
    const icons = document.querySelectorAll('.icons__icon');
    const certs = document.querySelectorAll('.certifications__item');
    gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_8__.ScrollTrigger);
    gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.from(icons, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: icons,
        start: 'center bottom',
        end: 'center center',
        scrub: 2
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.from(certs, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.certifications',
        start: 'center bottom',
        end: 'center center',
        scrub: 2
      }
    });
    setTimeout(() => {
      gsap__WEBPACK_IMPORTED_MODULE_7__.gsap.to(this.ElementRef.nativeElement, {
        opacity: 1,
        ease: 'Circ.easeOut',
        duration: 1.5
      });
    }, 1000);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 63,
  vars: 5,
  consts: [[3, "title"], [1, "introduction"], [1, "mt"], [1, "body-1"], ["mouseTracking", ""], ["href", "https://www.toptal.com/resume/adnan-gobeljic", "target", "_blank", "rel", "noopener noreferrer", "mouseTracking", ""], ["href", "https://www.linkedin.com/in/adnan-gobeljic/", "target", "_blank", "rel", "noopener noreferrer", "mouseTracking", ""], ["href", "mailto:adnangobeljic997@gmail.com", "mouseTracking", ""], ["mouseTracking", "", "mat-fab", "", "extended", "", "color", "primary", "href", "assets/Adnan-Gobeljic-CV.pdf", "download", "Adnan-Gobeljic-CV.pdf", "target", "_blank", "rel", "noopener noreferrer"], [1, "skills", "icons"], ["class", "skills__skill icons__icon", "matTooltipClass", "tooltip--dark", "loading", "lazy", 3, "src", "alt", "matTooltip", "invert", 4, "ngFor", "ngForOf"], [1, "clients", "icons"], [4, "ngFor", "ngForOf"], [1, "certifications-section"], [1, "mt", 2, "margin-top", "24px"], [1, "certifications"], ["class", "certifications__item", 4, "ngFor", "ngForOf"], ["matTooltipClass", "tooltip--dark", "loading", "lazy", 1, "skills__skill", "icons__icon", 3, "src", "alt", "matTooltip"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["matTooltipClass", "tooltip--dark", 1, "clients__client", "icons__icon", 3, "src", "alt", "matTooltip"], [1, "certifications__item"], [1, "certifications__date"], ["mouseTracking", "", "class", "certifications__title certifications__title-link", "target", "_blank", "rel", "noopener noreferrer", "matTooltipClass", "tooltip--dark", 3, "href", "matTooltip", 4, "ngIf", "ngIfElse"], ["certTitleNoLink", ""], [1, "certifications__issuer"], ["mouseTracking", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipClass", "tooltip--dark", 1, "certifications__title", "certifications__title-link", 3, "href", "matTooltip"], [1, "certifications__title-icon"], [1, "certifications__title"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-landing");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-section", 0)(2, "div", 1)(3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "INTRODUCTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " I am ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Adnan Gobelji\u0107");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, ", a full-stack engineer with six years of experience, a member of Toptal network, medal-decorated math olympian, AWS certified developer associate and Msc. of computer science. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br")(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Specialized in working with startups and scale-ups. I like fast paced environments. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br")(14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Feel free to download my CV/Resume or check it out ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 5)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "online");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br")(21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " For any further questions or potential opportunities, please don't hesitate to reach out via ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 6)(24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "LinkedIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 7)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 8)(32, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "download");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " CV / Resume ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "SKILLS");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, HomeComponent_img_38_Template, 1, 5, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "SOME BRANDS I'VE WORKED FOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, HomeComponent_ng_container_42_Template, 3, 4, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "app-section", 13)(44, "h2", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "CERTIFICATIONS");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, HomeComponent_div_47_Template, 8, 4, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "app-marquee");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "app-section")(50, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "SOME PROJECTS I'VE WORKED ON");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " Please note that the portfolio displayed here represents only a portion of my work. Due to non-disclosure agreements (");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "NDA");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, ") with certain clients and projects, I am unable to showcase the complete range of my experience. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "app-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "app-marquee");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "footer")(60, "app-section")(61, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.skills);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.clients);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.certifications);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Adnan Gobelji\u0107");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatFabAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent, _UI_section_section_component__WEBPACK_IMPORTED_MODULE_2__.SectionComponent, _UI_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_3__.MarqueeComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_5__.MouseTrackingDirective],
  styles: ["[_nghost-%COMP%] {\n  opacity: 0;\n}\n[_nghost-%COMP%]   .mt[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n[_nghost-%COMP%]   app-section.certifications-section[_ngcontent-%COMP%] {\n  margin-top: -100px;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 18px;\n  line-height: 1.3;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c2185b;\n}\n[_nghost-%COMP%]   .introduction[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n[_nghost-%COMP%]   .introduction[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .introduction[_ngcontent-%COMP%]   .icons__icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  height: 48px;\n}\n[_nghost-%COMP%]   .certifications[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n}\n@media screen and (min-width: 700px) {\n  [_nghost-%COMP%]   .certifications[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 18px;\n  }\n}\n[_nghost-%COMP%]   .certifications__item[_ngcontent-%COMP%] {\n  background: #424242;\n  border-radius: 10px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-left: 3px solid #c2185b;\n}\n[_nghost-%COMP%]   .certifications__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n  margin-bottom: 6px;\n}\n[_nghost-%COMP%]   .certifications__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.25;\n  margin-bottom: 6px;\n}\n[_nghost-%COMP%]   .certifications__title-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n[_nghost-%COMP%]   .certifications__title-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .certifications__title-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  opacity: 0.9;\n}\n[_nghost-%COMP%]   .certifications__issuer[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\n.seolyphant[_ngcontent-%COMP%] {\n  color: #c2185b;\n  text-decoration: none;\n}\n\n.invert[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKO0FBQ0U7RUFDRSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFITjtBQUtNO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFIUjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FBTko7QUFRSTtFQU5GO0lBT0ksOEJBQUE7SUFDQSxTQUFBO0VBTEo7QUFDRjtBQU9JO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3RUFBQTtFQUNBLDhCQUFBO0FBTE47QUFRSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTk47QUFTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFSTjtBQVVNO0VBQ0UsMEJBQUE7QUFSUjtBQVlJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVk47QUFhSTtFQUNFLFlBQUE7QUFYTjs7QUFnQkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBvcGFjaXR5OiAwO1xuICAubXQge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gIH1cblxuICBhcHAtc2VjdGlvbi5jZXJ0aWZpY2F0aW9ucy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogI2MyMTg1YjtcbiAgICB9XG4gIH1cblxuICAuaW50cm9kdWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgLmljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDI0cHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICZfX2ljb24ge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZXJ0aWZpY2F0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTRweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IDE4cHg7XG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNjMjE4NWI7XG4gICAgfVxuXG4gICAgJl9fZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cblxuICAgICZfX3RpdGxlLWxpbmsge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3RpdGxlLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG5cbiAgICAmX19pc3N1ZXIge1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgfVxufVxuXG4uc2VvbHlwaGFudCB7XG4gIGNvbG9yOiAjYzIxODViO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbnZlcnQge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5167:
/*!***********************************!*\
  !*** ./src/app/home/home.data.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "certifications": () => (/* binding */ certifications),
/* harmony export */   "clients": () => (/* binding */ clients),
/* harmony export */   "skills": () => (/* binding */ skills)
/* harmony export */ });
const skills = [
// {
//   src: 'html.svg',
//   alt: 'HTML 5',
// },
// {
//   src: 'css.svg',
//   alt: 'CSS 3',
// },
{
  src: 'python.png',
  alt: 'Python'
}, {
  src: 'fastapi.svg',
  alt: 'FastAPI',
  invert: true
}, {
  src: 'aws.png',
  alt: 'AWS'
}, {
  src: 'angular.svg',
  alt: 'Angular'
}, {
  src: 'react.svg',
  alt: 'React'
}, {
  src: 'nodejs.svg',
  alt: 'Node.js'
}, {
  src: 'nestjs.webp',
  alt: 'NestJS'
}, {
  src: 'typescript.png',
  alt: 'Typescript'
}, {
  src: 'mysql.svg',
  alt: 'MySQL'
}, {
  src: 'mongodb.svg',
  alt: 'MongoDB'
}
// {
//   src: 'sass.svg',
//   alt: 'SASS',
// },
// {
//   src: 'js.svg',
//   alt: 'JavaScript',
// },
// {
//   src: 'redux.svg',
//   alt: 'Redux',
// },
// {
//   src: 'java.svg',
//   alt: 'Java',
// },
// {
//   src: 'ngrx.svg',
//   alt: 'Ngrx',
// },
// {
//   src: 'spring-boot.svg',
//   alt: 'Spring Boot',
// },
];

const clients = [{
  src: 'bmw.svg',
  alt: 'BMW',
  href: 'https://www.bmw.com'
}, {
  src: 'usa.png',
  alt: 'USA Government',
  href: 'https://wa.gov/'
}, {
  src: 'ericsson.svg',
  alt: 'Ericsson',
  href: 'https://www.ericsson.com'
}, {
  src: 'rag.svg',
  alt: 'RAG',
  href: 'https://www.rag.de'
}, {
  src: 'gravitee.svg',
  alt: 'Gravitee',
  href: 'https://www.gravitee.io'
}, {
  src: 'yum.svg',
  alt: 'Yum!',
  href: 'https://www.yum.com'
}, {
  src: 'solargis.svg',
  alt: 'Solargis',
  href: 'https://www.solargis.com'
}, {
  src: 'toptal.svg',
  alt: 'Toptal',
  href: 'https://www.toptal.com'
}, {
  src: 'insightful.svg',
  alt: 'Insightful',
  href: 'https://www.insightful.io'
}];
const certifications = [{
  dateRange: 'September 2025 - September 2028',
  title: 'AWS Certified Developer - Associate',
  issuer: 'Amazon Web Services',
  url: 'https://www.credly.com/badges/61593d57-f223-49f4-89d6-ed13501c77e9'
}, {
  dateRange: 'March 2025 - Present',
  title: 'eCommerce SEO and AI Specialist',
  issuer: 'Seolaxy',
  url: 'https://my.seolaxy.com/u/adnan-gobeljic'
}];

/***/ }),

/***/ 5800:
/*!*******************************************************!*\
  !*** ./src/app/home/landing/asset/asset.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetComponent": () => (/* binding */ AssetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AssetComponent {
  constructor() {
    this.assetName = '';
    this.class = '';
  }
}
AssetComponent.ɵfac = function AssetComponent_Factory(t) {
  return new (t || AssetComponent)();
};
AssetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AssetComponent,
  selectors: [["app-asset"]],
  inputs: {
    assetName: "assetName",
    class: "class"
  },
  decls: 1,
  vars: 4,
  consts: [["draggable", "false", 3, "src"]],
  template: function AssetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/landing-page/", ctx.assetName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4598:
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ 1573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/asset.component */ 5800);




const _c0 = ["sky"];
class LandingComponent {
  constructor(elRef) {
    this.elRef = elRef;
    this.numberOfStars = 15;
  }
  ngAfterViewInit() {
    this.setParallax();
    this.injectStars();
    this.cloudsAnimation();
    this.setupScrollIndicatorFade();
  }
  ngOnDestroy() {
    if (this.scrollIndicatorScrollHandler) {
      window.removeEventListener('scroll', this.scrollIndicatorScrollHandler);
    }
  }
  setParallax() {
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const mount1 = document.querySelector('.mountain--1');
    const mount2 = document.querySelector('.mountain--2');
    const divider = document.querySelector('.divider');
    const houses = document.querySelectorAll('.house');
    const headline = document.querySelectorAll('.headline');
    const floor = document.querySelector('.floor');
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(headline, {
      top: '100%',
      scale: 0.4,
      rotate: 360,
      ease: 'power.3',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1
      }
    });
    // Floor
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(floor, {
      y: '10px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1
      }
    });
    // Mountain 1
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(mount1, {
      y: '20px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1
      }
    });
    // Mountain 2
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(mount2, {
      y: '50px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(divider, {
      height: '40%',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1
      }
    });
    houses.forEach(house => {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(house, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: this.skyEl.nativeElement,
          start: 'center center',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }
  injectStars() {
    for (let i = 0; i < this.numberOfStars; i++) {
      let star = document.createElement('div');
      star.classList.add('star');
      let widthAndHeight = this.random(5, 'px');
      star.style.height = star.style.width = widthAndHeight;
      star.style.left = this.random(100, '%');
      star.style.top = this.random(100, '%');
      this.skyEl.nativeElement.appendChild(star);
      const delay = Math.floor(Math.random() * 4);
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(star, {
        duration: 1,
        opacity: 0.5,
        scale: 0.5,
        delay: delay,
        yoyo: true,
        repeat: -1
      });
    }
  }
  cloudsAnimation() {
    const fog = document.querySelectorAll('.fog');
    fog.forEach((fogEl, i) => {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(fogEl, {
        left: `-${(i + 2) * 100}%`
      });
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(fog, {
      repeat: -1,
      ease: 'none',
      duration: 15,
      left: '120%'
    });
  }
  random(range, unit) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
  }
  scrollToNext() {
    const nextSection = document.querySelector('app-section');
    if (nextSection && 'scrollIntoView' in nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  setupScrollIndicatorFade() {
    const indicator = this.elRef.nativeElement.querySelector('.scroll-indicator');
    if (!indicator) return;
    // Fade out quickly as you start scrolling down from the hero.
    const thresholdPx = Math.min(220, Math.round(window.innerHeight * 0.25));
    const onScroll = () => {
      const y = Math.min(window.scrollY, thresholdPx);
      const progress = y / thresholdPx;
      const opacity = 1 - progress;
      const translateY = `${6 + progress * 12}px`;
      indicator.style.opacity = `${opacity}`;
      indicator.style.setProperty('--indicator-ty', translateY);
      indicator.classList.toggle('scroll-indicator--hidden', window.scrollY > thresholdPx);
    };
    onScroll();
    this.scrollIndicatorScrollHandler = onScroll;
    window.addEventListener('scroll', this.scrollIndicatorScrollHandler, {
      passive: true
    });
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  viewQuery: function LandingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.skyEl = _t.first);
    }
  },
  decls: 22,
  vars: 15,
  consts: [["aria-label", "Scroll down", 1, "scroll-indicator", 3, "click"], [1, "scroll-indicator__text"], ["aria-hidden", "true", 1, "scroll-indicator__icon"], ["viewBox", "0 0 300 300", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "headline"], ["id", "SunCatcherStudio", "fill", "none", "d", "M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"], ["font-size", "32", "fill", "#ffffff", "letter-spacing", "0", "font-family", "Roboto", "font-weight", "bold"], [0, "xlink", "href", "#SunCatcherStudio", "side", "left", "startOffset", "5"], [1, "sky"], ["sky", ""], ["src", "assets/landing-page/fog2.png", "alt", "fog", 1, "fog"], ["src", "assets/landing-page/fog2.png", "alt", "fog", 1, "fog", "fog--2"], [3, "assetName"], [1, "floor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320", "preserveAspectRatio", "none", 1, "divider"], ["fill", "#323232", "fill-opacity", "1", "d", "M0,96L60,122.7C120,149,240,203,360,218.7C480,235,600,213,720,208C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_0_listener() {
        return ctx.scrollToNext();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Scroll down");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u25BC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "text", 5)(8, "textPath", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Adnan Gobelji\u0107 . Full stack . Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 7, 8)(12, "img", 9)(13, "img", 10)(14, "app-asset", 11)(15, "app-asset", 11)(16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-asset", 11)(20, "app-asset", 11)(21, "app-asset", 11);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mountain mountain--1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetName", "mountain1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mountain mountain--2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetName", "mountain2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("house house--1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetName", "house1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("house house--2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetName", "house2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("house house--3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetName", "house3");
    }
  },
  dependencies: [_asset_asset_component__WEBPACK_IMPORTED_MODULE_0__.AssetComponent],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background-attachment: fixed;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  border-bottom: 1px solid #474554;\n  \n}\n[_nghost-%COMP%]     img {\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]     .star {\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  background-color: #fff;\n}\n[_nghost-%COMP%]     .mountain {\n  position: absolute;\n  bottom: 140px;\n  width: 100%;\n}\n[_nghost-%COMP%]     .mountain--1 {\n  height: 20%;\n  left: -10%;\n  z-index: 1;\n}\n[_nghost-%COMP%]     .mountain--2 {\n  width: 120%;\n  height: 15%;\n  z-index: 3;\n}\n[_nghost-%COMP%]     .house {\n  position: absolute;\n  width: 100px;\n  max-width: 100px;\n  bottom: 20px;\n  left: 50%;\n  z-index: 4;\n}\n[_nghost-%COMP%]     .house--1 {\n  transform: translateX(calc(-50% - 100px));\n}\n[_nghost-%COMP%]     .house--2 {\n  transform: translateX(calc(-50% + 100px));\n}\n[_nghost-%COMP%]     .house--3 {\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to top, #2e2e2e, #000);\n}\n[_nghost-%COMP%]   .floor[_ngcontent-%COMP%] {\n  z-index: 4;\n  display: block;\n  position: absolute;\n  bottom: 0%;\n  height: 150px;\n  width: 100%;\n  background-color: #191919;\n}\n[_nghost-%COMP%]   .fog[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.3;\n  bottom: 150px;\n  height: 50%;\n}\n[_nghost-%COMP%]   .fog--2[_ngcontent-%COMP%] {\n  transform: rotate(-180deg) translateY(-20%);\n}\n[_nghost-%COMP%]   .divider[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  bottom: -1px;\n  width: 100%;\n  height: 100px;\n}\n[_nghost-%COMP%]   .headline[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  z-index: 2;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n[_nghost-%COMP%]   .headline[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   .scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translate(-50%, var(--indicator-ty, 0));\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 24px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 200ms ease, transform 200ms ease, background 200ms ease;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n[_nghost-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.45);\n}\n[_nghost-%COMP%]   .scroll-indicator__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  opacity: 0.9;\n}\n[_nghost-%COMP%]   .scroll-indicator__icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_bounce 1.8s infinite ease;\n}\n[_nghost-%COMP%]   .scroll-indicator__chevrons[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  opacity: 0.8;\n  animation: _ngcontent-%COMP%_bounce 1.8s infinite ease 150ms;\n}\n[_nghost-%COMP%]   .scroll-indicator__mouse[_ngcontent-%COMP%] {\n  position: relative;\n  width: 16px;\n  height: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 3px;\n  opacity: 0.9;\n}\n[_nghost-%COMP%]   .scroll-indicator__wheel[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_wheel 1.8s infinite ease;\n}\n[_nghost-%COMP%]   .scroll-indicator__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.6;\n  margin-left: 2px;\n}\n[_nghost-%COMP%]   .visually-hidden[_ngcontent-%COMP%], [_nghost-%COMP%]   .sr-only[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(3px);\n  }\n  60% {\n    transform: translateY(1px);\n  }\n}\n@keyframes _ngcontent-%COMP%_wheel {\n  0% {\n    transform: translateY(0);\n    opacity: 0.9;\n  }\n  50% {\n    transform: translateY(6px);\n    opacity: 0.3;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 0.9;\n  }\n}\n@keyframes _ngcontent-%COMP%_indicator-fade-in {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 6px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n[_nghost-%COMP%]   .scroll-indicator--hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  transform: translate(-50%, 6px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBK0dBLHFCQUFBO0FBN0dGO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDTjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFEUjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRlI7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSk47QUFNTTtFQUNFLHlDQUFBO0FBSlI7QUFPTTtFQUNFLHlDQUFBO0FBTFI7QUFRTTtFQUNFLDJCQUFBO0FBTlI7QUFXRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FBVEo7QUFZRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVhKO0FBYUk7RUFDRSwyQ0FBQTtBQVhOO0FBZUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFiSjtBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFkSjtBQWdCSTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7QUFkTjtBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrREFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsMkVBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBakJKO0FBb0JFO0VBQ0UsK0JBQUE7QUFsQko7QUFxQkU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbkJKO0FBc0JFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQXBCSjtBQXVCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FBckJKO0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF0Qko7QUF5QkU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQXZCSjtBQTBCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF4Qko7QUEyQkU7O0VBRUUsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBekJKO0FBNEJFO0VBQ0U7SUFLRSx3QkFBQTtFQTlCSjtFQWdDRTtJQUNFLDBCQUFBO0VBOUJKO0VBZ0NFO0lBQ0UsMEJBQUE7RUE5Qko7QUFDRjtBQWlDRTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxZQUFBO0VBL0JKO0VBaUNFO0lBQ0UsMEJBQUE7SUFDQSxZQUFBO0VBL0JKO0VBaUNFO0lBQ0Usd0JBQUE7SUFDQSxZQUFBO0VBL0JKO0FBQ0Y7QUFrQ0U7RUFDRTtJQUNFLFVBQUE7SUFDQSwrQkFBQTtFQWhDSjtFQWtDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQWhDSjtBQUNGO0FBbUNFO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFqQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NzQ1NTQ7XG5cbiAgOjpuZy1kZWVwIHtcbiAgICBpbWcge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICAuc3RhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5tb3VudGFpbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE0MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYtLTEge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgbGVmdDogLTEwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgJi0tMiB7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaG91c2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHotaW5kZXg6IDQ7XG5cbiAgICAgICYtLTEge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtNTAlIC0gMTAwcHgpKTtcbiAgICAgIH1cblxuICAgICAgJi0tMiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC01MCUgKyAxMDBweCkpO1xuICAgICAgfVxuXG4gICAgICAmLS0zIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTUwJSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5za3kge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyZTJlMmUsICMwMDApO1xuICB9XG5cbiAgLmZsb29yIHtcbiAgICB6LWluZGV4OiA0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCMzMjMyMzIsIDEwJSk7XG4gIH1cblxuICAuZm9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGJvdHRvbTogMTUwcHg7XG4gICAgaGVpZ2h0OiA1MCU7XG5cbiAgICAmLS0yIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpIHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgfVxuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5oZWFkbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAqIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8qIFNjcm9sbCBpbmRpY2F0b3IgKi9cbiAgLnNjcm9sbC1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLWluZGljYXRvci10eSwgMCkpO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZSwgYmFja2dyb3VuZCAyMDBtcyBlYXNlO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICB9XG5cbiAgLnNjcm9sbC1pbmRpY2F0b3I6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIH1cblxuICAuc2Nyb2xsLWluZGljYXRvcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICAuc2Nyb2xsLWluZGljYXRvcl9faWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBhbmltYXRpb246IGJvdW5jZSAxLjhzIGluZmluaXRlIGVhc2U7XG4gIH1cblxuICAuc2Nyb2xsLWluZGljYXRvcl9fY2hldnJvbnMge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMS44cyBpbmZpbml0ZSBlYXNlIDE1MG1zO1xuICB9XG5cbiAgLnNjcm9sbC1pbmRpY2F0b3JfX21vdXNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgLnNjcm9sbC1pbmRpY2F0b3JfX3doZWVsIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGFuaW1hdGlvbjogd2hlZWwgMS44cyBpbmZpbml0ZSBlYXNlO1xuICB9XG5cbiAgLnNjcm9sbC1pbmRpY2F0b3JfX2hpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgfVxuXG4gIC52aXN1YWxseS1oaWRkZW4sXG4gIC5zci1vbmx5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAtMXB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUsXG4gICAgMjAlLFxuICAgIDUwJSxcbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgd2hlZWwge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGluZGljYXRvci1mYWRlLWluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2cHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLnNjcm9sbC1pbmRpY2F0b3ItLWhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2cHgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5506:
/*!******************************************************************************************!*\
  !*** ./src/app/home/projects/project-details-dialog/project-details-dialog.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsDialogComponent": () => (/* binding */ ProjectDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/mouseTracking.directive */ 3533);







function ProjectDetailsDialogComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.data.details.description, " ");
  }
}
function ProjectDetailsDialogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.details.role);
  }
}
function ProjectDetailsDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.details.stack.join(", "));
  }
}
function ProjectDetailsDialogComponent_div_11_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6);
  }
}
function ProjectDetailsDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectDetailsDialogComponent_div_11_li_4_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.data.details.highlights);
  }
}
function ProjectDetailsDialogComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Open site ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.data.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ProjectDetailsDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  close() {
    this.dialogRef.close();
  }
}
ProjectDetailsDialogComponent.ɵfac = function ProjectDetailsDialogComponent_Factory(t) {
  return new (t || ProjectDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
ProjectDetailsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectDetailsDialogComponent,
  selectors: [["app-project-details-dialog"]],
  decls: 16,
  vars: 6,
  consts: [[1, "dialog"], [1, "dialog__header"], [1, "dialog__title"], ["mat-icon-button", "", "type", "button", "aria-label", "Close", 3, "click"], [1, "dialog__content"], ["class", "dialog__description", 4, "ngIf"], ["class", "dialog__section", 4, "ngIf"], [1, "dialog__actions"], ["mouseTracking", "", "mat-stroked-button", "", "class", "dialog__link", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [1, "dialog__description"], [1, "dialog__section"], [1, "dialog__label"], [1, "dialog__value"], [1, "dialog__list"], [4, "ngFor", "ngForOf"], ["mouseTracking", "", "mat-stroked-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "dialog__link", 3, "href"]],
  template: function ProjectDetailsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsDialogComponent_Template_button_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectDetailsDialogComponent_p_8_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProjectDetailsDialogComponent_div_9_Template, 5, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectDetailsDialogComponent_div_10_Template, 5, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectDetailsDialogComponent_div_11_Template, 5, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProjectDetailsDialogComponent_a_13_Template, 4, 1, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsDialogComponent_Template_button_click_14_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.details == null ? null : ctx.data.details.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.details == null ? null : ctx.data.details.role);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.details == null ? null : ctx.data.details.stack == null ? null : ctx.data.details.stack.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.details == null ? null : ctx.data.details.highlights == null ? null : ctx.data.details.highlights.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.link);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_0__.MouseTrackingDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  width: min(720px, 92vw);\n  padding: 16px 16px 12px;\n  color: #fff;\n  background: #303030;\n  border-radius: 12px;\n}\n.dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  line-height: 1.2;\n}\n.dialog__content[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.dialog__description[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  opacity: 0.92;\n}\n.dialog__section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.dialog__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.75;\n  margin-bottom: 6px;\n}\n.dialog__value[_ngcontent-%COMP%] {\n  opacity: 0.95;\n}\n.dialog__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  opacity: 0.95;\n}\n.dialog__actions[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.dialog__link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWRldGFpbHMtZGlhbG9nL3Byb2plY3QtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0FBTEo7QUFRRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVBKO0FBV0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVE4iLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlhbG9nIHtcbiAgd2lkdGg6IG1pbig3MjBweCwgOTJ2dyk7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAmX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICBvcGFjaXR5OiAwLjkyO1xuICB9XG5cbiAgJl9fc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gICZfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgJl9fdmFsdWUge1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gIH1cblxuICAmX19saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgbWF0LWljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2635:
/*!*****************************************************!*\
  !*** ./src/app/home/projects/projects.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ 1573);
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.data */ 5927);
/* harmony import */ var _project_details_dialog_project_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details-dialog/project-details-dialog.component */ 5506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/mouseTracking.directive */ 3533);











function ProjectsComponent_div_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 12)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("matTooltip", "Open in new tab")("matTooltipPosition", "above");
  }
}
function ProjectsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProjectsComponent_div_1_a_4_Template, 3, 3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10)(10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_div_1_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const project_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openDetails(project_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", project_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Project details")("matTooltipPosition", "above");
  }
}
class ProjectsComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.projects = _projects_data__WEBPACK_IMPORTED_MODULE_0__.projects;
  }
  ngAfterViewInit() {
    gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);
    const projects = document.querySelectorAll('.projects__project');
    gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.from(projects, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projects,
        start: 'center bottom',
        end: 'center center',
        scrub: 2
      }
    });
  }
  openDetails(project) {
    this.dialog.open(_project_details_dialog_project_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsDialogComponent, {
      data: project,
      autoFocus: false,
      restoreFocus: true
    });
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 2,
  vars: 1,
  consts: [[1, "projects"], ["class", "projects__project", 4, "ngFor", "ngForOf"], [1, "projects__project"], [1, "projects__project__wrap"], [1, "projects__project__img"], ["alt", "", "loading", "lazy", 3, "src"], ["mouseTracking", "", "mat-icon-button", "", "class", "projects__project__cta projects__project__cta--link", "target", "_blank", "rel", "noopener noreferrer", "matTooltipClass", "tooltip--dark", 3, "href", "matTooltip", "matTooltipPosition", 4, "ngIf"], [1, "projects__project__wrap__inner"], [1, "projects__project__header"], [1, "projects__project__title"], [1, "projects__project__actions"], ["mouseTracking", "", "mat-icon-button", "", "type", "button", "matTooltipClass", "tooltip--dark", 1, "projects__project__action", "projects__project__action--info", 3, "matTooltip", "matTooltipPosition", "click"], ["mouseTracking", "", "mat-icon-button", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipClass", "tooltip--dark", 1, "projects__project__cta", "projects__project__cta--link", 3, "href", "matTooltip", "matTooltipPosition"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 13, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _directives_mouseTracking_directive__WEBPACK_IMPORTED_MODULE_2__.MouseTrackingDirective],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .projects[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: flex-start;\n  gap: 24px;\n}\n@media screen and (max-width: 520px) {\n  [_nghost-%COMP%]   .projects[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media screen and (min-width: 700px) {\n  [_nghost-%COMP%]   .projects[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n[_nghost-%COMP%]   .projects__project[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #424242;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n[_nghost-%COMP%]   .projects__project[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n[_nghost-%COMP%]   .projects__project[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 102%;\n  height: 102%;\n}\n[_nghost-%COMP%]   .projects__project__title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .projects__project__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n[_nghost-%COMP%]   .projects__project__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n[_nghost-%COMP%]   .projects__project__action[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.35);\n  border-radius: 50%;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);\n  -webkit-backdrop-filter: saturate(120%) blur(2px);\n          backdrop-filter: saturate(120%) blur(2px);\n}\n[_nghost-%COMP%]   .projects__project__action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);\n}\n[_nghost-%COMP%]   .projects__project__action--info[_ngcontent-%COMP%] {\n  transform: translateX(6px);\n}\n[_nghost-%COMP%]   .projects__project__cta[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.55);\n  border-radius: 50%;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);\n  -webkit-backdrop-filter: saturate(120%) blur(2px);\n          backdrop-filter: saturate(120%) blur(2px);\n  padding: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .projects__project__cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n}\n[_nghost-%COMP%]   .projects__project__img[_ngcontent-%COMP%] {\n  aspect-ratio: 2/1;\n  overflow: hidden;\n  border-bottom: 2px solid #c2185b;\n  position: relative;\n}\n[_nghost-%COMP%]   .projects__project__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n[_nghost-%COMP%]   .projects__project__wrap[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .projects__project__wrap__inner[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n[_nghost-%COMP%]   .projects__project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBUEY7SUFRSSwwQkFBQTtFQUVKO0FBQ0Y7QUFBSTtFQVhGO0lBWUksMkRBQUE7RUFHSjtBQUNGO0FBREk7RUFDRSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUNBLDREQUFBO0FBRU47QUFBTTtFQUNFLDRFQUFBO0FBRVI7QUFDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ1Y7QUFHTTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtBQURSO0FBSU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFGUjtBQUtNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFIUjtBQU1NO0VBQ0UsV0FBQTtFQUdBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUFOUjtBQVFRO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0FBTlY7QUFVTTtFQUNFLDBCQUFBO0FBUlI7QUFXTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBR0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUdBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWRSO0FBZ0JRO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0FBZFY7QUFrQk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFHQSxrQkFBQTtBQWxCUjtBQW9CUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQWxCVjtBQXNCTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFwQlI7QUFzQlE7RUFDRSxhQUFBO0FBcEJWO0FBd0JNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUF0QlIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5wcm9qZWN0cyB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMjRweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgfVxuXG4gICAgJl9fcHJvamVjdCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAkcHJvamVjdDogJjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxuICAgICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAyJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMiU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAmX19hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgfVxuXG4gICAgICAmX19hY3Rpb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAvLyBFbnN1cmUgdmlzaWJpbGl0eSBvbiBkYXJrIGNhcmQgYmFja2dyb3VuZFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxMjAlKSBibHVyKDJweCk7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19hY3Rpb24tLWluZm8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcbiAgICAgIH1cblxuICAgICAgJl9fY3RhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgcmlnaHQ6IDRweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgLy8gRW5zdXJlIHZpc2liaWxpdHkgb3ZlciBicmlnaHQgaW1hZ2VzXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDEyMCUpIGJsdXIoMnB4KTtcblxuICAgICAgICAvLyBSZXNwZWN0IEFuZ3VsYXIgTWF0ZXJpYWwgaWNvbiBidXR0b24gc2l6aW5nIHdoaWxlIGFkZGluZyBzb21lIHBhZGRpbmdcbiAgICAgICAgcGFkZGluZzogNHB4O1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19pbWcge1xuICAgICAgICBhc3BlY3QtcmF0aW86IDIvMTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjE4NWI7XG5cbiAgICAgICAgLy8gQW5jaG9yIHRoZSBhYnNvbHV0ZS1wb3NpdGlvbmVkIENUQSB0byB0aGUgaW1hZ2UgYXJlYVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fd3JhcCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAmX19pbm5lciB7XG4gICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5927:
/*!************************************************!*\
  !*** ./src/app/home/projects/projects.data.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = [{
  name: 'Suzy',
  src: 'assets/projects/suzy.jpg',
  link: 'https://www.suzy.com/',
  details: {
    description: 'Consumer insights platform focused on fast survey research and analytics.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    highlights: ['Built and maintained production UI features.', 'Worked on performance and UX improvements across core flows.']
  }
}, {
  name: 'Witness AI',
  src: 'assets/projects/witness-ai.webp',
  link: 'https://witness.ai/',
  details: {
    description: 'AI security platform for visibility and governance across AI usage.',
    role: 'Frontend Engineer',
    stack: ['React', 'Remix', 'TypeScript', 'CSS', 'Python', 'FastAPI', 'Docker'],
    highlights: ['Implemented UI surfaces for product workflows.', 'Improved usability and consistency of shared components.']
  }
}, {
  name: 'Washington Government',
  src: 'assets/projects/washington-government.webp',
  link: 'https://irataxcredits.wa.gov/',
  details: {
    description: 'Government portal for program information and applications.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Python', 'FastAPI', 'Docker', 'Weaviate'],
    highlights: ['Shipped accessible, responsive UI improvements.', 'Worked on reliability and maintainability of the frontend.']
  }
}, {
  name: 'Wfhomie',
  src: 'assets/projects/wfhomie.png',
  link: 'https://www.goco.io/',
  details: {
    description: 'Business operations platform and customer-facing flows.',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'RxJS', 'Spring Boot', 'Node.js', 'Google Cloud Platform', 'Kubernetes', 'Kafka'],
    highlights: ['Implemented features across multiple UI modules.', 'Collaborated closely with product and design on UX.']
  }
}, {
  name: 'Solargis',
  src: 'assets/projects/solargis.jpeg',
  link: 'https://apps.solargis.com/',
  details: {
    description: 'Solar resource and PV performance analytics for energy planning.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Spring Boot', 'Node.js', 'AWS', 'Python', 'Lambda', 'DynamoDB'],
    highlights: ['Delivered UI enhancements for data-heavy screens.', 'Focused on clarity and usability for complex datasets.']
  }
}, {
  name: 'Bloola',
  src: 'assets/projects/bloola.png',
  link: 'https://www.bloola.com/',
  details: {
    description: 'Customer platform for workflows and information management.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Spring Boot'],
    highlights: ['Built UI features and refined existing screens.', 'Improved consistency across components and styling.']
  }
}, {
  name: 'Insightful',
  src: 'assets/projects/insightful.png',
  link: 'https://app.insightful.io/',
  details: {
    description: 'Workforce analytics and productivity platform for teams and managers.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'RxJS', 'Google Cloud Platform', 'Node.js', 'Microservices', 'Redis'],
    highlights: ['Implemented and polished complex UI flows.', 'Improved responsiveness and UI performance.']
  }
}, {
  name: 'Gravitee',
  src: 'assets/projects/gravitee.jpeg',
  link: 'https://www.gravitee.io/',
  details: {
    description: 'API management platform covering gateways, policies, and developer portals.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'RxJS', 'AWS', 'Microservices', 'Kafka', 'Redis'],
    highlights: ['Delivered UI work for platform modules and administration screens.', 'Worked on maintainability and shared UI patterns.']
  }
}, {
  name: 'Arti Analytics DSML',
  src: 'assets/projects/arti-analytics-dsml.jpeg',
  link: 'https://artianalytics.com/',
  details: {
    description: 'Analytics and data science / machine learning platform for teams.',
    role: 'Frontend Engineer',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Python', 'FastAPI', 'Docker', 'MySQL'],
    highlights: ['Built UI functionality for product workflows.', 'Improved overall UX and component consistency.']
  }
}];

/***/ }),

/***/ 8649:
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATERIAL_MODULES": () => (/* binding */ MATERIAL_MODULES),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





const MATERIAL_MODULES = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [MATERIAL_MODULES, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule]
  });
})();

/***/ }),

/***/ 6990:
/*!*******************************************!*\
  !*** ./src/app/modules/routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingModule": () => (/* binding */ RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}
// Add more routes here as needed
];

class RoutingModule {}
RoutingModule.ɵfac = function RoutingModule_Factory(t) {
  return new (t || RoutingModule)();
};
RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RoutingModule
});
RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7615:
/*!*******************************************!*\
  !*** ./src/app/services/mouse.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseService": () => (/* binding */ MouseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class MouseService {
  constructor() {
    this._status = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('closed');
    this.status$ = this._status.asObservable();
  }
  setLastStatus(status) {
    this._status.next(status);
  }
  getLastStatus() {
    return this._status;
  }
}
MouseService.ɵfac = function MouseService_Factory(t) {
  return new (t || MouseService)();
};
MouseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MouseService,
  factory: MouseService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map