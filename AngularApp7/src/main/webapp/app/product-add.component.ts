/**
 * New Product create
 */
 
 import { Component, Inject } from '@angular/core';
 import {FormBuilder, Validators} from '@angular/forms';
 import {Router} from '@angular/router';
 
 import {ProductService} from './product.service'; 	
 import {Product } from './Product';
 import {ValidationService} from './validation.service';
 
 
 @Component({
 	selector: 'product-add',
 	templateUrl: 'app/product-add.html';
 })
 
 export class ProductAddComponent{
 	
 	private title: string = "New Product";
 	private product: Product;
 	private ratings: number[];
 	
 	constructor(@Inject(ProductService) private productService: ProductService,
 				@Inject(FormBuilder) private formBuilder: FormBuilder,
 				@Inject(Router) private router: Router){
 					
 	}
 	
 	ngOnInit(){
 		this.product = new Product();
 		this.ratings = this.productService.ratings;
 		this.productAddForm = this.formBuilder.group({
 			'productName' : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
 			'description' : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
 			'price' : ['', [Validators.required, ValidationService.numberValidator]],
 			'available' : ['', [Validators.required, ValidationService.numberValidator]],
 			'rating' : ['', [Validators.required, ValidationService.numberValidator]]
 		});
 	}
 	
 	addProduct(): void{
 		console.log(JSON.stringify(this.product));
 		this.productService.addProduct(this.product).subscribe(
 			product => console.log(product),
 			error => console.error(error),
 			() => {
		 		this.product = new Product();
 				this.productAddForm.reset();
 				this.router.navigate(['/product']);	
 			}
 		);
 	}
 	
 }
