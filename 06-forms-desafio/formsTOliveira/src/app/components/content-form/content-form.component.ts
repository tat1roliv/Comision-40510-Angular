import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent {

  formSubscription: FormGroup;

  constructor(){
    let controles: any = {
      name_: new FormControl('', [ Validators.required , Validators.minLength(2) ]),
      lastName_: new FormControl('', [ Validators.required, Validators.minLength(3)   ]),
      email_: new FormControl('', [ Validators.required , Validators.email  ]),
    }

    this.formSubscription = new FormGroup(controles);

  }

  handleSubscription(){
    console.log('login', this.formSubscription);
  }

}
