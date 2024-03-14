import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  onSave(): void {

  }
}
