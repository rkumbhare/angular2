import {Directive, ElementRef, Renderer, Inject} from '@angular/core';


@Directive({
    selector: '[info]'
})
export class InfoDirective{
    constructor(@Inject(ElementRef) ele: ElementRef, @Inject(Renderer) renderer: Renderer){
        renderer.setElementStyle(ele.nativeElement, 'backgroundColor', 'lightgreen');
    }
}