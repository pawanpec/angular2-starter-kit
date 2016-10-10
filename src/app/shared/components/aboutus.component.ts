import {Component} from 'angular2/core';
import {Header} from '../components/header/header.component';
@Component({
  selector: 'aboutus',
  directives: [Header],
  template: require('./aboutus.template.html')
})
export class Aboutus {}
