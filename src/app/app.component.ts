import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data$: Observable<User[]>;
  
  selected: boolean = false;
  
  selectedUser: User;



  title = 'httpClientModuleTest';

  constructor(private _svc: DataService){
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.data$ = this._svc.getData();
  }

  userClick(id: number) {
    this.selected = true;
    this.data$.forEach(
      v => {
        v.forEach(sv =>
          {
            if(sv.id === id) {
              this.selectedUser = sv;
              console.log(this.selectedUser);
            }
          }
        )
      }
    )
  }

  showArray(arr: String[]){
    arr.forEach((v,i,a) =>{
      console.log(`<li> ${i}:${v} </li>`)
    return `<li> ${i}:${v} </li>`;
    })
  }

}
