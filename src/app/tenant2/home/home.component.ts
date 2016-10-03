import {Component} from 'angular2/core';
import {Header} from '../../shared/components/header/header.component';
import {Footer} from '../../shared/components/footer/footer.component';
import {Body} from '../../shared/components/body/body.component';
import {DownloadSection} from './components/downloadSection.component';

@Component({
    selector: 'home',
    directives: [
        Header,
        Footer,
        Body,
        DownloadSection,
    ],
    template: require('./home.template.html')
})
export class Tenant2_Home {
}
