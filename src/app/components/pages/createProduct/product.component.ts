import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/Product';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {

  btnText: string = 'Compartilhar!';
  image?: File;

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.image = file;
  }

  buildForm() {}

  async createHandler(Product: Product) {
    const formData = new FormData();

    formData.append('title', Product.title);
    formData.append('description', Product.description);

    if (Product.image) {
      formData.append('image', Product.image);
    }

    await this.ProductService.createProduct(formData).subscribe();

    this.messagesService.add(`Producto adicionado com sucesso!`);

    this.router.navigate(['/']);
  }
}
