import {Directive, Input, Inject, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
    selector: '[if]'
})
export class IfDirective{

    constructor(@Inject(TemplateRef) private templateRef: TemplateRef<any>, 
                @Inject(ViewContainerRef) private viewContainerRef: ViewContainerRef){
    }

    @Input() set if(condition: boolean){
        if(condition){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else{
            this.viewContainerRef.clear();
        }
    }

}