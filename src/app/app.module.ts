import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendComponent } from './friend/friend.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    FriendComponent,
    MessagesListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
