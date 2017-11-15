import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../../providers/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {



  constructor(private _ps:PeliculasService,
              private router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string){
    if (texto.length == 0) {
        return;
    }
      this.router.navigate(['/buscar', texto]);
  }

}
