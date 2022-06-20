import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>();
  @Input() ProductData: Product | null = null;
  @Input() btnText!: string;

  image?: File;

  ProductForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.ProductData) {
      console.log(this.ProductData);
      this.ProductForm = new FormGroup({
        id: new FormControl(this.ProductData.id),
        name: new FormControl(this.ProductData.name, [Validators.required]),
        category: new FormControl(this.ProductData.category, [Validators.required]),
        count: new FormControl(this.ProductData.count, [Validators.required]),
        description: new FormControl(this.ProductData.description, [
          Validators.required,
        ]),
        image: new FormControl(''),
      });
    } else {
      this.ProductForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        count: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      });
    }
  }

  get name() {
    return this.ProductForm.get('name')!;
  }

  get category() {
    return this.ProductForm.get('cat')!;
  }

  get count() {
    return this.ProductForm.get('quant')!;
  }

  get description() {
    return this.ProductForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.ProductForm.patchValue({ image: event.target.files[0] });
  }

  submit() {
    if (this.ProductForm.invalid) {
      return;
    }

    console.log(this.ProductForm.value);

    this.onSubmit.emit(this.ProductForm.value);
  }
}
