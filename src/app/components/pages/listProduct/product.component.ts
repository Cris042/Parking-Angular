import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { Product } from 'src/app/Product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-productList',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductsComponent implements OnInit {

  public product!: Product[];

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit() 
  {
    this.getEmployees();
  }

  public getEmployees(): void 
  {
    this.ProductService.getProducts().subscribe
    (
      (response: Product[]) => {
        this.product = response['content'];
        console.log(this.product);
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
}
