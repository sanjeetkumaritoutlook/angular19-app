import { Component,Signal } from '@angular/core';
import { resource } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  template:`
  <div *ngIf="users.isLoading()">Loading...</div>,
  <div *ngIf="users.error()">Error. users.error() 11.</div>
  <ul *ngIf="users.value()">
    <li *ngFor="let user of users.value()">{{ user.name }}</li>
</ul>
  <button (click)="reloadUsers()">Reload</button>
  `,
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = resource({
    loader: async () =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      if (!response.ok) {
       throw new Error("Failed to fetch users");
      }
      return response.json();
      },
});

  reloadUsers(){ 
    this.users.reload();
  }

}
