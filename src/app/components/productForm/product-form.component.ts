import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent implements OnInit 
{
  @Output() onSubmit = new EventEmitter<Product>();
  @Input() ProductData: Product | null = null;
  @Input() btnText!: string;

  ProductForm!: FormGroup;

  constructor() {}

  ngOnInit(): void 
  {
    if (this.ProductData) 
    {
      console.log(this.ProductData);
      this.ProductForm = new FormGroup({
        id: new FormControl(""),
        name: new FormControl(this.ProductData.name, [Validators.required]),
        category: new FormControl(this.ProductData.category, [Validators.required]),
        count: new FormControl( String( this.ProductData.count ), [Validators.required]),
        description: new FormControl(this.ProductData.description, [
          Validators.required,
        ]),
        imageUrl: new FormControl(this.ProductData.imageUrl),
      });
    } 
    else 
    {
      this.ProductForm = new FormGroup({
        id: new FormControl(""),
        name: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        count: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        imageUrl: new FormControl(''),
      });
    }
  }

  get name() {
    return this.ProductForm.get('name')!;
  }

  get category() {
    return this.ProductForm.get('category')!;
  }

  get count() {
    return this.ProductForm.get('count')!;
  }

  get description() {
    return this.ProductForm.get('description')!;
  }

  get imageUrl() {
    return this.ProductForm.get('imageUrl')!;
  }


  submit() 
  {
    if (this.ProductForm.invalid) 
    {
      return;
    }

    console.log(this.ProductForm.value);

    this.onSubmit.emit(this.ProductForm.value);
  }
}
