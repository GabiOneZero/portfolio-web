import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { LinksbarComponent } from './components/linksbar/linksbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BurgermenuComponent } from './components/burgermenu/burgermenu.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    IntroComponent,
    LinksbarComponent,
    MenuComponent,
    BurgermenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
