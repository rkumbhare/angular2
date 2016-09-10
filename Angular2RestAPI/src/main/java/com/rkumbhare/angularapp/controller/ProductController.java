/**
 * @auther Rakesh
 * @time Sep 7, 2016
 */

package com.rkumbhare.angularapp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rkumbhare.angularapp.vo.Product;

@RestController
public class ProductController {

	private List<Product> productList;
	private int seq = 1000;

	@PostConstruct
	public void init() {
		productList = new ArrayList<Product>();
		productList.add(new Product(++seq, "Dettol Soap", "Prod" + seq, "Dettol Soap", 25.00, 25, 5));
		productList.add(new Product(++seq, "Lifeboy Soap", "Prod" + seq, "Lifeboy Soap", 20.00, 10, 3.5));
		productList.add(new Product(++seq, "Dabur Hair Oil", "Prod" + seq, "Hair Oil", 45.00, 20, 4.5));
		productList.add(new Product(++seq, "Gellete Shaver", "Prod" + seq, "Gellete Shaver", 95.00, 50, 4));
	}

	@PreDestroy
	public void destroy() {
	}

	@RequestMapping(value = "/product", method = RequestMethod.GET, produces = {"application/json"})
	@ResponseBody
	public List<Product> getProduct() {
		return productList;
	}

}
