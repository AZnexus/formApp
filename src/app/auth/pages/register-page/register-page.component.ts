import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from 'src/app/shared/validators/validators'; // import all amb un nom de variable per poder accedir des de dins el codi.

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]], // Afegeix un pattern custom amb els validators
    username: ['', [Validators.required, customValidators.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  isValidField(field: string) {
    //TODO: Obtenerlo de un servicio especializado
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
