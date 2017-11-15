import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; //para el map

@Injectable()
export class PeliculasService {


  private apikey:string = "2a66a1f47357bad3723d5d29bc381712";
  private urlMovidb:string = "https://api.themoviedb.org/3";

  peliculas:any[]=[];


  constructor(private jsonp:Jsonp) { }

    getEnCine(){
        let desde = new Date();
        let hasta = new Date();
        hasta.setDate(hasta.getDate() + 7);
        let desdeStr=`${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
        let hastaStr=`${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;

        let url = `${ this.urlMovidb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get( url )
                        .map(data => data.json().results);
    }

    getPopulares(){

      let url = `${ this.urlMovidb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

      return this.jsonp.get( url )
                      .map(res => res.json().results);
    }


  getPopularesInfantiles(){
    let url = `${ this.urlMovidb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                    .map(dat => dat.json().results);
  }

  buscarPelicula(texto:string){
      let url = `${ this.urlMovidb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

      return this.jsonp.get( url )
                      .map(res => {
                        this.peliculas = res.json().results;
                        console.log(this.peliculas);
                        return res.json().results

                      });
  }

  getPelicula( id:string ){
    let query = `/movie/${ id }?`;
    let url = this.urlMovidb + query + `&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .map( res =>{
              console.log(res.json());
              return res.json();
              // this.artistas = res.json().artists.items;

            })
  }


}
