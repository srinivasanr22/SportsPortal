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
  
  /**
   * This function is used to add new data to the JSON file.
   * @param data 
   */
  addData(data):any {
    return this.http.post('http://localhost:3000/playerInfo', data);
  }

  /**
   * This file is used to update the exisiting data in the JSON file.
   * @param data 
   * @param id 
   */
  updatePlayer(data, id) {
    return this.http.patch(`http://localhost:3000/playerInfo/${id}`, data);
  }

  /**
   * This is used to delete the existing player details from the JSON file.
   * @param id 
   */
  deletePlayer(id) {
    return this.http.delete(`http://localhost:3000/playerInfo/${id}`);
  }
}
