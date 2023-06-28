import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProducts: any[] = [
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
    // Add more featured products as needed
  ];
  
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
