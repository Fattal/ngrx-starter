import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface LoadedData {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  public loadData(): Observable<LoadedData> {
    return this.http.get<LoadedData>('/data');
  }
}
