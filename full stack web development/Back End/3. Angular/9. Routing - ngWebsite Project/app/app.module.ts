import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {SidebarComponent} from './components/sidebar/sidebar';

import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ServicesComponent, SidebarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
