/**
 * @auther Rakesh
 * @time Oct 9, 2016
 */

package com.rkumbhare.app.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rkumbhare.app.domain.MyUtil;

@RestController
public class MyController {

	@RequestMapping(value = "/message", method = RequestMethod.GET)
	public String message() {
		return MyUtil.getMessage();
	}

}
