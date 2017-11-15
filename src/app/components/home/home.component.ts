import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cine:any;
  populares:any;
  popularesInfantiles:any;
  imagen:string = "";

  constructor(private _ps:PeliculasService) {
      this._ps.getEnCine()
                  .subscribe(data => {
                    this.cine=data;
                    console.log(data);
                  });

      this._ps.getPopulares()
                  .subscribe(data => {
                    this.populares=data;
                    console.log(data);
                  });

      this._ps.getPopularesInfantiles()
                  .subscribe(data => {
                    this.popularesInfantiles=data;
                    console.log(data);
                  });

  }

  ngOnInit() {
  }

}
