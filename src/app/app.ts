import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./componentes/menu/menu";
import { Rodape } from "./componentes/rodape/rodape";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HttpClientModule,
    Menu,
    Rodape
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'loja-jogos';
}
