import { Component, OnInit } from '@angular/core';
import { Samochod } from 'src/samochod';
import { SAMOCHODY } from 'src/samochody';

@Component({
  selector: 'app-najlepszy',
  templateUrl: './najlepszy.component.html',
  styleUrls: ['./najlepszy.component.css']
})
export class NajlepszyComponent implements OnInit {

  constructor() { }
  auto!:Samochod;
  autka:Samochod[] = SAMOCHODY;
  znajdzNajlepszy():Samochod{
    let najlepszySamochod:Samochod = this.autka[0];
    let maksymalnyRanking:number = 0;
    this.autka.forEach( auto=> {
      if(maksymalnyRanking<auto.ranking){
        maksymalnyRanking = auto.ranking;
        najlepszySamochod = auto;
      }
    });
    return najlepszySamochod;
  }
  ngOnInit(): void {
    this.auto=this.znajdzNajlepszy();
  }

}
