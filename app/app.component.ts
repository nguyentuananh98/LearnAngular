import {AfterViewInit, Component, VERSION, Version, ViewChild} from '@angular/core';
import {ToggleComponent} from './toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  name = 'Angular' + VERSION.major;
  @ViewChild('toggleComp') toggleComp: ToggleComponent;
  isWarning: boolean;
  isDanger: boolean;
  currentProgress: any;
  isChecked = true;
  private apiCall: any;
  ngAfterViewInit() {
    this.toggleComp.checkedChange.subscribe(console);
  }
}
