import { Component, OnInit } from '@angular/core';
import { DisplayProductsPageComponent } from "../../components/product-carousel/product-carousel.component";

export interface Product {
    name: string;
    image: string;
    inventoryStatus: string;
    price: number;
}

export interface Category {
    category: string;
    categoryDescription: string;
    items: Product[];
}

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [DisplayProductsPageComponent]
})
export class ProductsComponent implements OnInit {
    products: Category[] = [];

    ngOnInit() {
        this.products = [
            {
                category: 'CÀ PHÊ',
                categoryDescription: 'Devices and gadgets for everyday use.',
                items: [
                    { name: 'MOCHA MACHIATO', image: 'product1.jpg', inventoryStatus: 'In Stock', price: 50000 },
                    { name: 'Product 2', image: 'product2.jpg', inventoryStatus: 'Out of Stock', price: 75 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            },
            {
                category: 'Home Appliances',
                categoryDescription: 'Essential appliances for home use.',
                items: [
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            },
            {
                category: 'Electronics',
                categoryDescription: 'Devices and gadgets for everyday use.',
                items: [
                    { name: 'Product 1', image: 'product1.jpg', inventoryStatus: 'In Stock', price: 50 },
                    { name: 'Product 2', image: 'product2.jpg', inventoryStatus: 'Out of Stock', price: 75 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            },
            {
                category: 'Home Appliances',
                categoryDescription: 'Essential appliances for home use.',
                items: [
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            },
            {
                category: 'Electronics',
                categoryDescription: 'Devices and gadgets for everyday use.',
                items: [
                    { name: 'Product 1', image: 'product1.jpg', inventoryStatus: 'In Stock', price: 50 },
                    { name: 'Product 2', image: 'product2.jpg', inventoryStatus: 'Out of Stock', price: 75 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            },
            {
                category: 'Home Appliances',
                categoryDescription: 'Essential appliances for home use.',
                items: [
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 },
                    { name: 'Product 3', image: 'product3.jpg', inventoryStatus: 'Low Stock', price: 100 }
                ]
            }
            // Add more categories and products as needed
        ];
    }
}
