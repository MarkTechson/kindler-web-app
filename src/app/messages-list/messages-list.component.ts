import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  messages = [
    {
      from: "Angie",
      photo: "https://randomuser.me/api/portraits/lego/2.jpg",
      text: "Hey! How are you?",
      read: false,
      online: true
    },
    {
      from: "Jamal",
      photo: "https://randomuser.me/api/portraits/lego/1.jpg",
      text: "Donuts 🍩 on deck",
      read: false,
      online: true
    },
    {
      from: "Wesley",
      photo: "https://randomuser.me/api/portraits/lego/3.jpg",
      text: "I am incredible...friend me",
      read: false,
      online: false
    },
    {
      from: "Denny",
      photo: "https://randomuser.me/api/portraits/lego/4.jpg",
      text: "I would love to be friends",
      read: false,
      online: false
    },
    {
      from: "Denny2Cool",
      photo: "https://randomuser.me/api/portraits/lego/4.jpg",
      text: "My other Denny is my Finsta Friend Account",
      read: false,
      online: true
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
