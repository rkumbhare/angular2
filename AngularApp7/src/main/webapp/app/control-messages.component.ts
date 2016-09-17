import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'control-messages',
  template: `
  			<div *ngIf="errorMessage !== null" [style.color]='color'>
  				{{errorMessage}}
  			</div>
  			`	
})

export class ControlMessagesComponent {
	  
	  errorMessage: string;
	  @Input() control: FormControl;
	  color: string = "RED";
	  
	  constructor() { 
	  }
	
	  get errorMessage(): string {
	    for (let propertyName in this.control.errors) {
	      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
	        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
	      }
	    }
	    
	    return null;
	  }
	  
}
