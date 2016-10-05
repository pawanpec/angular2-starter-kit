import {Component} from 'angular2/core';
import {Footer as Footer_Main} from '../../../../shared/components/footer/footer.component';


export class Footer extends Footer_Main {
  footerContent = 'footer content overridden in tenant 1 not html';
}
