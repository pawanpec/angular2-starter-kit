import {Component} from 'angular2/core';
import {Footer} from '../footer/footer.component';
import {Header} from '../header/header.component';

@Component({
  selector: 'cbody',
  directives: [Footer,Header],
  template: require('./body.template.html')
})
export class Body {}