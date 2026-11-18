import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
role: boolean = true;

  flag: boolean = false;

  get imgSrc(): string {
    return this.flag
      ? '/assets/images/nature.png'
      : '/assets/images/kais.jpg';
  }

  ChangeImage(): void {
    this.flag = !this.flag;
  }
}
  

