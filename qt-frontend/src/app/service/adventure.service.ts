import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  private apiUrl = environment.apiUrl; // Define your backend API URL in environment.ts

  constructor(private http: HttpClient) {}

  getAllAdventures(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/adventures`);
  }
}
