import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
	
import {Product} from './Product';
import {ProductService} from './product.service';
 
 
 @Component({
 	selector: 'product-edit',
 	templateUrl: 'app/product-edit.html'
 })
 
 export class ProductEditComponent{
 	
 	private title: string;
 	private ratings: number[];
 	private product: Product;
 	
 	constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
 				@Inject(Router) private router: Router,
 				@Inject(ProductService) private productService: ProductService,
 				@Inject(FormBuilder) private formBuilder: FormBuilder) {
 	}
 	
 	ngOnInit() {
 		this.product = new Product();
 		this.ratings = this.productService.ratings;
 		this.route.params.forEach((params: Params) => {
 			this.product.productId = params['productId'];
 			this.productService.getProduct(this.product.productId).subscribe(
 				data => this.product=data,
 				error => console.error(error),
 				() => {
 					this.title = "Update Product : " + this.product.productName
 				}
 			);
 		});
 		
 		this.productEditForm = this.formBuilder.group({
 			'productName' : ['', [Validators.required]],
 			'description' : ['', [Validators.required]],
 			'price' : ['', [Validators.required]],
 			'available' : ['', [Validators.required]],
 			'rating' : ['', [Validators.required]],
 		});
 	}
 	
 	updateProduct(){
 		this.productService.update(this.product).subscribe(
 			data => console.log(data),
 			error => console.error(error),
 			() => {
 				this.router.navigate(['/product']);	
 			}
 		);
 	}
 	
 }
