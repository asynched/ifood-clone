package com.nxrth.ifood.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Data
@Entity
public class Seller {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int seller_id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String address;

  @Column(nullable = false)
  private String image_url;

  @Column(nullable = false)
  private String category;

  @Column(nullable = false)
  private double rating = 0;

  @Column(nullable = false)
  private double distance = 0;

  @OneToMany(mappedBy = "seller")
  private List<Product> products;

  @JsonIgnore
  @CreationTimestamp
  private Date created_at;

  @JsonIgnore
  @UpdateTimestamp
  private Date updated_at;
}
