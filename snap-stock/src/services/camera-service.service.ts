import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraServiceService {

  constructor(private httpClient: HttpClient) { }


  // Not sure what this method will actually look like
  postPhoto(url: string, body: JSON): Observable<any>{
    return this.httpClient.post(url, body);
  }



}
