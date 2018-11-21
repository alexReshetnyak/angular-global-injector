import { Component, OnInit } from '@angular/core';
import { ChildService } from './services/child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-di';
  todos: any;

  constructor(
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  public async getTodos(): Promise<any> {
    this.todos = await this.childService.getServerInfo().toPromise();
    console.log('TODOS:', this.todos );
  }

}
