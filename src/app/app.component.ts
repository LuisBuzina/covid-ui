import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Covid } from './models/covid.model';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  dados: Covid;
  covid: []

  constructor(
    private covidService: CovidService
  ){}
  ngOnInit() {
    this.carregarDados();
  }

  carregarDados(){
    this.covidService.obterDados()
    .then(dados => this.dados = dados);
  }
}

