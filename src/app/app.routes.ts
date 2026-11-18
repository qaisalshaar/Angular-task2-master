import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found'; // تأكد من المسار الصحيح لمكون الـ 404

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Product',
    pathMatch: 'full',
    title: 'Home'
  },
  {
    path: 'Product',
    component: Product,
    title: 'Product'
  },
  {
    path: 'Home',
    component: Home,
    title: 'Home'
  },
  {
    path: 'about',
    component: About,
    title: 'About'
  },
  {
    path: 'contact',
    component: Contact
    ,
    title: 'Contact'
  },
  {
    path: 'not-found',
    component: NotFound,
    title: '404 Not Found'
  },
  {
    path: '**',
    redirectTo: 'not-found' ,
    title: '404 Not Found'
  }
];