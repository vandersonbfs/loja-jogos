import { Injectable } from '@angular/core'; import { HttpClient } from '@angular/common/http'; import { Observable } from 'rxjs'; @Injectable({ providedIn: 'root' }) export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'; constructor(private http: HttpClient) { } obterProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  obterProdutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  adicionarProduto(produto: any): Observable<any> { return this.http.post<any>(this.apiUrl, produto); }
  atualizarProduto(id: number, produto: any): Observable<any> { return this.http.put<any>(`${this.apiUrl}/${id}`, produto); }
  deletarProduto(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}/${id}`); }
}