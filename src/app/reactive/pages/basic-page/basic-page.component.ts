import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]], // Camp requerit i amb un mínim de 3 lletres
    price: [0, [ Validators.required, Validators.min(0) ]],       // Camp requerit i amb valor mínim de 0
    inStorage: [0, [ Validators.required, Validators.min(0) ]]    // Camp requerit i amb valor mínim de 0

    // Aixo configura unes validacions però no s'estan utilitzant com a filtre implícitament. Cal fer una crida concreta per comprobar si es valid o no (la fem al onSave)
  });

  constructor(
    private fb: FormBuilder
  ) {}

  onSave(): void {

    if (this.myForm.invalid) return; // Si els validadors del form son invalids, surt i no executa el save. (Aixo es la comprobació de les validacions)
  }
}
