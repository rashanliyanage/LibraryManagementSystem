import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}
  web_api_get_all_Items ='';
  web_api_delete_item ="";
  web_api_borrow_item ="";

  private extractData(res: Response) {
 let body = res.json();

return body || {};
}


private handleError(error: any): Promise<any> {

return Promise.reject(error.message || error);
}



public  allItemsWithCategory(categoryId: any): Promise<any> {

  return this.http.get(this.web_api_get_all_Items)
  .toPromise()
  .then(this.extractData)
  .catch(this.handleError);

}

public deleteItem(categoryId: any): Promise<any> {
  return this.http.post(this.web_api_delete_item, categoryId)
     .toPromise()
     .then(this.extractData)
     .catch(this.handleError);
}

public borrowItem(borrowItem: any): Promise<any> {
  console.log(borrowItem);
  return this.http.post(this.web_api_borrow_item, borrowItem)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
}
}
