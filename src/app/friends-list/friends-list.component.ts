import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends = [
    {
      name: "Jamal",
      photo: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
      name: "Angie",
      photo: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      name: "Wesley",
      photo: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
      name: "Denny",
      photo: "https://randomuser.me/api/portraits/lego/4.jpg",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
