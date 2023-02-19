import { Component } from '@angular/core';
import { Curso } from './models/curso';

import { CursoService } from './services/curso.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo--';

  constructor(
    private cursoService: CursoService,
    private router: Router
  ){
    
  }

  redigirInicio(){
    this.router.navigate(['inicio', { mensaje : 'test'} ] )
  }



}
