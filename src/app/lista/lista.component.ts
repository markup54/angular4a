import { Component, OnInit } from '@angular/core';
import { Samochod } from 'src/samochod';
import { SAMOCHODY } from 'src/samochody';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }
  autka:Samochod [] = SAMOCHODY;
  ngOnInit(): void {
  }

}
