import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent,RodapeComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
