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

  btnText: string = 'Cadastro!';

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  buildForm() {}

  async createHandler(Product: Product) {
    const formData = new FormData();
    
    formData.append("id", String( Product.id ));
    formData.append("name", String( Product.name) );
    formData.append("category", String( Product.category));
    formData.append("count", String( Product.count ) );
    formData.append("description", String(Product.description));

    if (Product.imageUrl) 
    {
      formData.append('imageUrl', Product.imageUrl);
    }
   


    await this.ProductService.createProduct(formData).subscribe();

    this.messagesService.add(`Producto adicionado com sucesso!`);

    this.router.navigate(['/']);
  }
}
