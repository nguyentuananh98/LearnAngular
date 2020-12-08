import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `<div class="progress-bar-container"
    [style.backgroundColor] = "backgroundColor"
    >
    <div class="progress"
    [style]="{
    backgroundColor: progressColor,
    width: progress + '%' }"
    ></div>
    </div>`,
    styles: [ `
      .progress-bar-container,
      .progress {
        height: 20px;
      }
      .progress-bar-container{
        width:50%;
      }
      `]
})
export class ProgressBarComponent implements  OnInit, OnChanges{
  @Input() progress: 50;
  @Input() backgroundColor: '#ccc';
  @Input() progressColor: 'tomato';

  constructor(){
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
}
