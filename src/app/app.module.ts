import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarService } from './shared/car/car.service';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiphyService } from './shared/giphy/giphy.service';
import { CarEditComponent } from './car-edit/car-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Chat2Component } from './chat2/chat2.component';
import { ChatSocketModule } from './chat-socket/chat-socket.module';
import { Chat2Module } from './chat2/chat2.module';
import { AppchatComponent } from './appchat/appchat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatmessageService } from './shared/chatMessageService/chatmessage.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
  	path: 'chat',
  	component: AppchatComponent	
  },
  {
  	path: 'chat-list',
  	component: ChatListComponent	
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    AppchatComponent,
    ChatListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChatSocketModule,
    Chat2Module
  ],
  providers: [CarService, GiphyService, ChatmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
