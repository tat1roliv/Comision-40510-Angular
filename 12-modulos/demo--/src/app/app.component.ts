import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo--';

  constructor(
    private router: Router
  ){

  }

  redigirInicio(){
    this.router.navigate(['inicio'] )
  }



}
