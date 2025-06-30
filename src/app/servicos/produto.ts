import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Produto {
  private apiUrl = 'http://localhost:3000/produtos'
  constructor() { }
}
