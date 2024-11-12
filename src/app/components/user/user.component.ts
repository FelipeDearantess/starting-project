import { Component, EventEmitter, Input, input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required:true} ) avatar!:String;
    @Input({required:true} ) name!:String;
    @Input({required:true}) id!:String;
    @Output() select = new EventEmitter();

  get imagePath(){
    return'assets/users/' + this.avatar;
}
  onSelectUser(){
    this.select.emit(this.id);
}
}
