import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, AfterViewInit {

  @Input('ratio') parallaxRatio : number = 1
  private elementInited$ = new Subject();
  initialTop : number = 0

  constructor(private eleRef : ElementRef) {}

  ngOnInit(): void {
    this.elementInited$.subscribe(() => {
      this.initialTop = this.eleRef.nativeElement?.getBoundingClientRect().top ?? 0;
    })
  }
  ngAfterViewInit(): void {
    if(!!this.eleRef){
      this.elementInited$.next(1);
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
