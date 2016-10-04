import {Component} from 'angular2/core';
import {Footer as Footer_Main} from '../../../../shared/components/footer/footer.component';

@Component ({
  selector: 'footer',
  directives: [
  ],
  template: require('./footer.template.html')
})
export class Footer extends Footer_Main{
  text="child footer";
  
}
