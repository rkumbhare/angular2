import {Directive, ElementRef, Inject, HostListener, Renderer} from '@angular/core';

	
	
@Directive({
	selector: '[typeh]'
})
export class TypeHDirective{
	
	constructor(@Inject(ElementRef) private ele: ElementRef, @Inject(Renderer) private renderer: Renderer){
		
    }
	
	ngAfterViewInit(){
		let typehEle = this.ele.nativeElement;
		console.log(this.ele.nativeElement);
	}
	
	ngAfterContentInit() {
    	console.log(this.ele.nativeElement);
  	}
}