import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorInterpolationService {

  constructor() { }

  getRatingColor(value: number){
    const r = 0;
    const g = 1;
    const b = 2;

    const red = [255,0,0];
    const green = [0,255,0];
    const yellow = [255,255,0];

    var calcR:number, calcG:number, calcB:number;
    var selectedLow, selectedHigh;

    value = value/10;

    if(value <= 0.5){
      value = value * 2;
      selectedLow = red;
      selectedHigh = yellow;
    }else{
      value = (value - 0.5) * 2;
      selectedLow = yellow;
      selectedHigh = green;
    }
    calcR = (selectedHigh[r] - selectedLow[r]) * value + selectedLow[0]; 
    calcG = (selectedHigh[g] - selectedLow[g]) * value + selectedLow[1];  
    calcB = (selectedHigh[b] - selectedLow[b]) * value + selectedLow[2];

    return "rgb(" + calcR + "," + calcG + "," + calcB + ")"; 
    
  }
}
