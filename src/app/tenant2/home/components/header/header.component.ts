import {Component} from 'angular2/core';
import {Header as HeaderCore} from '../../../../shared/components/header/header.component';


@Component ({
    selector: 'header',
    directives: [banne
    ],
    template: require('./header.template.html')
})
export class Header extends HeaderCore{}



