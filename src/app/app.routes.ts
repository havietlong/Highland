import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: ProductDisplayComponent },
    
];
