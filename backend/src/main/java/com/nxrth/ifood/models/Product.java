package com.nxrth.ifood.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Data
@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int product_id;

  @Column(nullable = false)
  private String name;

  private String description;

  @Column(nullable = false)
  private String image_url;

  @Column(nullable = false)
  private double price;

  @JsonIgnore
  @ManyToOne
  private Seller seller;

  @JsonIgnore
  @CreationTimestamp
  private Date created_at;

  @JsonIgnore
  @UpdateTimestamp
  private Date updated_at;
}
