package com.nxrth.ifood.controllers;

import java.util.List;

import com.nxrth.ifood.models.Product;
import com.nxrth.ifood.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {
  @Autowired
  private ProductRepository productRepository;

  @GetMapping
  public List<Product> getProducts() {
    return productRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Product> getProduct(@PathVariable Integer id) {
    var optionalProduct = productRepository.findById(id);

    if (optionalProduct.isPresent())
      return new ResponseEntity<>(optionalProduct.get(), HttpStatus.OK);

    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }
}
