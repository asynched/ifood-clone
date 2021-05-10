export interface iProduct {
  product_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

export interface iSeller {
  seller_id: number;
  name: string;
  image_url: string;
  category: string;
  distance: number;
  address: string;
  opening_hours: string;
  products: iProduct[];
}
