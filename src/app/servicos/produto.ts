// Importa o decorador Injectable para permitir que a classe seja injetável (usada em injeção de dependência)
import { Injectable } from '@angular/core';

// Importa o HttpClient para realizar requisições HTTP
// (O HttpClientModule é geralmente importado no app.module.ts para habilitar o uso do HttpClient em toda a aplicação)
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Importa o tipo Observable do RxJS, que representa dados assíncronos que podem ser observados e manipulados reativamente
import { Observable } from 'rxjs';

// Define a classe como um serviço injetável disponível na raiz da aplicação (singleton),
// ou seja, será instanciado uma única vez e poderá ser usado em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class Produto {
  // URL base da API onde os dados dos produtos serão buscados
  private apiUrl = 'http://localhost:3000/produtos';

  // Injeta o serviço HttpClient no construtor, permitindo fazer chamadas HTTP dentro desta classe
  constructor(private http: HttpClient) { }

  // Método que retorna todos os produtos da API como um Observable de array genérico (any[])
  obterProdutos(): Observable<any[]> {
    // Realiza uma requisição HTTP GET para obter todos os produtos
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método que retorna um produto específico com base no ID fornecido
  obterProdutoPorId(id: number): Observable<any> {
    // Realiza uma requisição HTTP GET para obter os dados de um único produto pelo ID
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar um novo produto
  adicionarProduto(produto: any): Observable<any> {
    // Realiza uma requisição HTTP POST, enviando os dados do novo produto no corpo da requisição
    return this.http.post<any>(this.apiUrl, produto);
  }

  // Método para atualizar um produto existente com base no ID
  atualizarProduto(id: number, produto: any): Observable<any> {
    // Realiza uma requisição HTTP PUT para atualizar os dados do produto especificado
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto);
  }

  // Método para deletar um produto com base no ID
  deletarProduto(id: number): Observable<any> {
    // Realiza uma requisição HTTP DELETE para remover o produto especificado
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
