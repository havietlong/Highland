import { Component } from '@angular/core';
import { ProductDisplayComponent } from "../../components/product-display/product-display.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ProductDisplayComponent, CommonModule]
})
export class HomeComponent {
  products: Array<{ imgLink: string, title: string, description: string, bgColor: string, Color: string }> = [];

  constructor() {
    this.products = [
      {
        imgLink: './assets/img/image 4.png',
        title: 'Cà Phế',
        description: 'Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.',
        bgColor: 'rgba(36, 25, 11, 1)',
        Color: 'white',
      },

      {
        imgLink: './assets/img/image 5.png',
        title: 'Freeze',
        description: 'Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu túy của Việt Nam',
        bgColor: 'rgba(185, 244, 237, 1)',
        Color: 'rgba(24, 96, 44, 1)',
      },

      {
        imgLink: './assets/img/image 6.png',
        title: 'Trà',
        description: 'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.',
        bgColor: 'rgba(188, 201, 150, 1)',
        Color: 'white',
      }
    ];
  }
}