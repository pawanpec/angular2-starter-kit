import {Component} from 'angular2/core';
import {Footer} from '../../../../tenant1/home/components/footer/footer.component';
import {Header} from '../../../../tenant1/home/components/header/header.component';

@Component({
  selector: 'cbody',
  directives: [Footer,Header],
  template: require('./body.template.html')
})
export class Body {}
