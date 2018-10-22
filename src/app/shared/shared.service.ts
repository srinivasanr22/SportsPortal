import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SharedService {

  constructor(private http: Http) { }

  fetchData(fileName: string): any {
    return this.http.get(`../assets/${fileName}`);
  }

}
