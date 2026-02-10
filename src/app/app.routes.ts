import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
      { path: '', loadComponent:()=> import('./features/hero/hero.component')  .then(c => c.HeroComponent) },        // الصفحة الافتراضية
  { path: 'products', loadComponent:()=> import('./pages/product/product.component')  .then(c => c.ProductComponent) },
  {path: 'contact', loadComponent:()=> import('./pages/contact/contact.component')  .then(c => c.ContactComponent) },
  {path:'tray', loadComponent:()=> import('./pages/tray/tray.component')  .then(c => c.TrayComponent) },
  {path:'children', loadComponent:()=> import('./pages/children/children.component')  .then(c => c.ChildrenComponent) },
  {path:'napkins', loadComponent:()=> import('./pages/napkins/napkins.component')  .then(c => c.NapkinsComponent) },
  {path:'concrete', loadComponent:()=> import('./pages/concrete/concrete.component')  .then(c => c.ConcreteComponent) },
  {path:'**', redirectTo: ''}
];
