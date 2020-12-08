import {Component, Input, OnDestroy, OnInit, VERSION} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{name}}</h1>',
  styles: [`h1{font-family: Lato;}`]
})

 export class HelloComponent implements OnInit, OnDestroy{
  @Input() name: string;

  ngOnInit() {
    console.log('hello Init');
  }
  ngOnDestroy() {
    console.log('hello OnDestroy!');
  }
}
