import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {


  public strings = strings;
  height: number;
  weight: number;
  resultNumber = '00.0';
  resultText = strings.ST131;
  color = 'var(--ion-color-primary)';

  constructor() { }

  ngOnInit() {
  }

  bmiCalculate() {

     const height = this.height;
     const weight = this.weight;

     if (Number(height) && Number(weight)) {

       const imc = ((weight / height / height) * 703);

       this.resultNumber = imc.toFixed(2);

       if (imc < 18.5) {
         this.resultText = 'underweight';
         this.color = '#22a6b3';
       } else if (imc > 18.5 && imc < 25) {
         this.resultText = 'normal weight';
         this.color = '#6ab04c';
       } else if (imc >= 25 && imc < 30) {
         this.resultText = 'overweight';
         this.color = '#f0932b';
       } else {
         this.resultText = 'obese';
         this.color = '#eb4d4b';
       }

     }

   }

 }
