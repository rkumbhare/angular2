import {Directive, ElementRef, Inject, HostListener, Renderer} from '@angular/core';


@Directive({
    selector: '[error]'
})

export class ErrorDirective{

    constructor(@Inject(ElementRef) private ele: ElementRef, @Inject(Renderer) private renderer: Renderer){
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setBackgroundColor('white');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBackgroundColor('red');
    }

    setBackgroundColor(color){
        this.renderer.setElementStyle(this.ele.nativeElement, 'backgroundColor', color);
    }

}