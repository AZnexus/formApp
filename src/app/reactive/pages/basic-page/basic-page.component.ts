import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

const defaultValues = {
  name: 'Default Product',
  price: 10,
  inStorage: '5'
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]], // Camp requerit i amb un mínim de 3 lletres
    price: [0, [ Validators.required, Validators.min(0) ]],       // Camp requerit i amb valor mínim de 0
    inStorage: [0, [ Validators.required, Validators.min(0) ]]    // Camp requerit i amb valor mínim de 0

    // Aixo configura unes validacions però no s'estan utilitzant com a filtre implícitament. Cal fer una crida concreta per comprobar si es valid o no (la fem al onSave)
  });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.myForm.reset(defaultValues);
  }

  /**
   * Implementació generica per revisar si el camp es valid
   * @param field
   * @returns
   */
  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required': return 'Este campo es requerido';
        case 'minlength': return `Mínimo de ${ errors['minlength'].requiredLength } caracteres`;
      }
    }

    return 'TEST';
  }

  onSave(): void {

    if (this.myForm.invalid) {


      this.myForm.markAllAsTouched(); // Si no es válid, ho marca tot com a 'tocat'. Així dispara les validacions.
      return; // Si els validadors del form son invalids, surt i no executa el save. (Aixo es la comprobació de les validacions)
    }

    console.log(this.myForm.value);

    this.myForm.reset({price: 10, inStorage: 0}); // reseteja els valors a uns camps indicats aqui per paràmetre.
  }
}
