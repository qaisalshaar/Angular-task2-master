import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { NavbarComponent } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Product, NavbarComponent, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task2');
}
