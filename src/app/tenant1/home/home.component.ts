import {Component} from 'angular2/core';
import {Header} from '../../shared/components/header/header.component';
import {Footer} from '../../tenant1/home/components/footer/footer.component';
import {Body} from '../../shared/components/body/body.component';
import {Tagline} from './components/tagline.component';
import {DownloadSection} from './components/downloadSection.component';

@Component({
    selector: 'home',
    directives: [
        Header,
        Footer,
        Body,
        Tagline,
        DownloadSection
    ],
    template: require('./home.template.html')
})
export class Tenant1_Home {
}
