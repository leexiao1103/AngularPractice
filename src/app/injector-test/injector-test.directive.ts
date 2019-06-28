import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInjectorTest]'
})
export class InjectorTestDirective implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log('Spy Destroy.....');
  }

  ngOnInit(): void {
    console.log('Spy Oninit....');
  }

  constructor(private el: ElementRef) {
    console.log('Directive is: ', this.el);
  }

}
