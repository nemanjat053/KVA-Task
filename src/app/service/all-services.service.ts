import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOperater } from '../model/IOperater';

import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IKorisnik } from '../model/IKorisnik';
import { IPaket } from '../model/IPaket';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  _url = "http://localhost:3000/";



  constructor(private _http: HttpClient) { }

  // * -------------------------------------------------------------------------------- LISTA OPERATERA--------------------------------------------------------------------------------
  // * GET
  getOperatere(): Observable<IOperater[]>{
    return this._http.get<IOperater[]>(this._url + 'operater')
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    )
  }

  deleteOperator(id){
    return this._http.delete(this._url + 'operater/' + id)
  }

  dodajOperatera(operaterPodaci){
    return this._http.post((this._url + 'operater'), operaterPodaci)
  }

  // * -------------------------------------------------------------------------------- LISTA KORISNIKA --------------------------------------------------------------------------------
  // * GET
  getKorisnici(): Observable<IKorisnik[]>{
    return this._http.get<IKorisnik[]>(this._url + 'korisnik')
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    )
  }

  // * DELETE
  deleteKorisnik(id){
    return this._http.delete(this._url + 'korisnik/' + id)
  }

  // * CHANGE KORISNIK
  changeKorisnik(newKorisnik, id){
    return this._http.put((this._url + 'korisnik/' + id), newKorisnik)
  }

  //  * GET ONE
  getJedanKorisnik(id){
    return this._http.get<IKorisnik>((this._url + 'korisnik'), id).pipe(retry(3), catchError(this.handleError))
  }


  // * ADD KORISNIK
  dodajKorisnika(korisnikPodaci){
    return this._http.post((this._url + 'korisnik'), korisnikPodaci)
  }

  // *--------------------------------------------------------------------------------  LISTA PAKETA --------------------------------------------------------------------------------
  // * GET
  getPaketi(): Observable<IPaket[]>{
    return this._http.get<IPaket[]>(this._url + 'paket')
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    )
  }

  deletePaket(id){
    return this._http.delete(this._url + 'paket/' + id)
  }

  dodajPaket(paketPodaci){
    return this._http.post((this._url + 'paket'), paketPodaci)
  }



  // * ---------------------------------------- Error handling ------------------------------- * //
  // ! Handling errros
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
