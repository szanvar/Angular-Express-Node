import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
  public n1 : any;
  public n2 : any;
  ans :any;
  formData = new FormData();
  additionData()
  {
    return this.http.post('/api/add',this.formData);
  }

  getData()
  {
    return this.http.get('/api/getadminDetails')
  }
}
