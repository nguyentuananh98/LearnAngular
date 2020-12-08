import {Component, VERSION} from '@angular/core';



@Component({
    selector: 'app-my',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class MyAppComponent{
  name = 'Angular' + VERSION.major;
}
