import { Directive, ElementRef, Input, Renderer2 , OnInit } from '@angular/core';


@Directive({
  selector: '[appBooleanoEstilo]'
})
export class BooleanoEstiloDirective implements OnInit {
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    //console.log(this.element.nativeElement);
    //console.log(this.inscripcionAbierta);

  }

  ngOnInit(): void {
      console.log(this.inscripcionAbierta);
      this.renderer.setStyle(this.element.nativeElement, 'padding' , '0px 10px 0px 10px');
      this.renderer.setStyle(this.element.nativeElement, 'border-radius' , '40px');
      this.renderer.setStyle(this.element.nativeElement, 'color' , '#fff');
      this.renderer.setStyle(this.element.nativeElement,
        'background-color' ,
        this.inscripcionAbierta ? 'green' : 'tomato');
  }

}
