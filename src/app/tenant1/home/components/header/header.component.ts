import {Component} from 'angular2/core';
// import {Header as HeaderCore} from '../../../../tenant1/components/header/header.component';
import {Header as HeaderCore} from '../../../../shared/components/header/header.component'

@Component({
  selector: 'header',
  directives: [
  ],
  template: require('./header.template.html')
})
export class Header extends HeaderCore{
  abc='Dependency has been modified';
}


