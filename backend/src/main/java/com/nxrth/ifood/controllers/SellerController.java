package com.nxrth.ifood.controllers;

import java.util.List;

import com.nxrth.ifood.models.Product;
import com.nxrth.ifood.models.Seller;
import com.nxrth.ifood.repositories.ProductRepository;
import com.nxrth.ifood.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seller")
public class SellerController {
  @Autowired
  private SellerRepository sellerRepository;

  @Autowired
  private ProductRepository productRepository;

  @GetMapping
  public List<Seller> getSellers() {
    return sellerRepository.findAll();
  }

  @PostMapping
  public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) {
    try {
      return new ResponseEntity<>(sellerRepository.save(seller), HttpStatus.CREATED);
    } catch (Exception error) {
      System.out.printf("[ERROR]: %s", error);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @PostMapping("/{id}/product")
  public ResponseEntity<Product> createProduct(@PathVariable Integer id, @RequestBody Product product) {
    try {
      var optionalSeller = sellerRepository.findById(id);

      if (optionalSeller.isEmpty())
        throw new Exception();

      var seller = optionalSeller.get();

      product.setSeller(seller);

      return new ResponseEntity<>(productRepository.save(product), HttpStatus.CREATED);
    } catch (Exception error) {
      System.out.printf("[ERROR]: %s\n", error);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<Seller> getSeller(@PathVariable Integer id) {
    var optionalSeller = sellerRepository.findById(id);

    if (optionalSeller.isPresent())
      return new ResponseEntity<>(optionalSeller.get(), HttpStatus.OK);

    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }

}
