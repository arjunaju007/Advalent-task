import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
    Products: any[] = [
      { 
        id: 1,
        name: 'Product 1',
        price: 10.99,
        image: 'assets/Pictures/product-06.jpg'
      },
      { 
        id: 2,
        name: 'Product 2',
        price: 19.99,
        image: 'assets/Pictures/product-05.jpg'
      },
      { 
        id: 3,
        name: 'Product 3',
        price: 20.99,
        image: 'assets/Pictures/product-04.jpg'
      },
      { 
        id: 4,
        name: 'Product 4',
        price: 28.00,
        image: 'assets/Pictures/product-07.jpg'
      },
      { 
        id: 5,
        name: 'Product 5',
        price: 28.00,
        image: 'assets/Pictures/product-08.jpg'
      },
      { 
        id: 6,
        name: 'Product 6',
        price: 22.10,
        image: 'assets/Pictures/product-09.jpg'
      },
      { 
        id: 7,
        name: 'Product 6',
        price: 38.00,
        image: 'assets/Pictures/product-10.jpg'
      },
      { 
        id: 8,
        name: 'Product 7',
        price: 18.00,
        image: 'assets/Pictures/product-11.jpg'
      },
      { 
        id: 8,
        name: 'Product 8',
        price: 38.60,
        image: 'assets/Pictures/product-12.jpg'
      },
      { 
        id: 9,
        name: 'Product 9',
        price: 32.30,
        image: 'assets/Pictures/product-13.jpg'
      },
      { 
        id: 10,
        name: 'Product 10',
        price: 19.00,
        image: 'assets/Pictures/product-14.jpg'
      },
      { 
        id: 11,
        name: 'Product 11',
        price: 26.00,
        image: 'assets/Pictures/product-15.jpg'
      },
      { 
        id: 12,
        name: 'Product 12',
        price: 31.00,
        image: 'assets/Pictures/gallery-06.jpg'
      },
      { 
        id: 13,
        name: 'Product 13',
        price: 21.40,
        image: 'assets/Pictures/gallery-01.jpg'
      },
      { 
        id: 14,
        name: 'Product 14',
        price: 11.00,
        image: 'assets/Pictures/gallery-02.jpg'
      },
      { 
        id: 15,
        name: 'Product 15',
        price: 21.90,
        image: 'assets/Pictures/gallery-03.jpg'
      },
      { 
        id: 16,
        name: 'Product 16',
        price: 31.50,
        image: 'assets/Pictures/gallery-04.jpg'
      },
      { 
        id: 17,
        name: 'Product 17',
        price: 36.50,
        image: 'assets/Pictures/gallery-05.jpg'
      },
      { 
        id: 18,
        name: 'Product 18',
        price: 36.50,
        image: 'assets/Pictures/gallery-07.jpg'
      },
      { 
        id: 19,
        name: 'Product 19',
        price: 36.50,
        image: 'assets/Pictures/gallery-08.jpg'
      },
     
      // Add more featured products as needed
    ];
    products: Product[] = [];

}