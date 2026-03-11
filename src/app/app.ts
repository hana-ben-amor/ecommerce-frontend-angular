import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './components/top-bar/top-bar';
import { Navbar } from "./components/navbar/navbar";
import { SideNav } from "./components/side-nav/side-nav";
import { ProductList } from "./components/product-list/product-list";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopBar, Navbar, SideNav, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerceFrontend');
}
