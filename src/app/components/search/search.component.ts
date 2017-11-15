import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  // peliculas:any=[];
  //
  // texto:string;
  // imagen:string= "";

buscar:string="";

  constructor(private _ps:PeliculasService,
              private route:ActivatedRoute) {

      this.route.params.subscribe(parametros => {
        console.log(parametros);
        if ( parametros['texto'] ) {
            this.buscar = parametros['texto'];
            this.buscarPelicula();
        }
      })


  }

  ngOnInit() {

  }

  buscarPelicula(){
      if (this.buscar.length == 0) {
          return;
      }

      this._ps.buscarPelicula(this.buscar).subscribe()


  }

  // getPeliculas(){
  //   this._ps.buscarPelicula(this.texto)
  //               .subscribe(res => {
  //                 this.peliculas=res.results;
  //                 this.imagen= "http://image.tmdb.org/t/p/w300";
  //                 console.log(res.results);
  //               });
  // }


}
