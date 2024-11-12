import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users =DUMMY_USERS
  selectedUsersId = 'u1';


  get selectedUsers(){

    return this.users.find((user) => user.id === this.selectedUsersId)!
}


  onSelectUser(id:string){
    this.selectedUsersId = id;
  }
}
