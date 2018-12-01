import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewItemService {
  constructor(private http: HttpClient) {}

   web_api_add_new_item = '';
  private extractData(res: Response) {
    let body = res.json();

   return body || {};
   }

   private handleError(error: any): Promise<any> {

    return Promise.reject(error.message || error);
    }

    public addNewItem(newItem: any): Promise<any> {
    return this.http.post(this.web_api_add_new_item, newItem)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

    }



}
