import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveChatService } from './services/live-chat-service';
import { HomeComponent } from './components/home/home.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'live-chat', component: LiveChatComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [LiveChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
