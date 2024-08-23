import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'webdevtask';
  totalCost: number = 0
  option1Active: boolean = false;
  option2Active: boolean = false;
  option3Active: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  activateOption(option: string): void {
    switch(option) {
      case "option1":
        this.option1Active = true;
        this.option2Active = false;
        this.option3Active = false;
        this.totalCost = 18;
        break;
      case "option2":
        this.option1Active = false;
        this.option2Active = true;
        this.option3Active = false;
        this.totalCost = 24;
        break;
      case "option3":
        this.option1Active = false;
        this.option2Active = false;
        this.option3Active = true;
        this.totalCost = 36;
        break;
    }
  }
}
