import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ){}

    ngOnInit() {
      this.route.queryParams.subscribe((parametros) => {
        console.log(parametros)
      })
    }


}
