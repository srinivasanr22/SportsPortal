import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) { }

  /**
   * This function used to fetch the JSON file data.
   * @param fileName 
   */
  fetchData(fileName: string): any {
    return this.http.get(`../assets/${fileName}`);
  }

}
