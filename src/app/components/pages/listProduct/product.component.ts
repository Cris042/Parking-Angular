import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-productList',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductsComponent implements OnInit {


  constructor(
    private ProductService: ProductService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  
}
