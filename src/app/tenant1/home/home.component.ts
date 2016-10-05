import {Component} from 'angular2/core';
import {Footer as FooterCore} from '../../shared/components/footer/footer.component';
// import {Body} from '../../shared/components/body/body.component';
import {Body} from './components/body/body.component';
import {Tagline} from './components/tagline.component';
import {DownloadSection} from './components/downloadSection.component';

// class Header extends HeaderCore{
//     abc = 'This is the Header of tenant1';
// }

class Footer extends FooterCore{
    footerContent = 'This is Footer of tenant1';
}

@Component({
    selector: 'home',
    directives: [
        // Header,
        Footer,
        Body,
        Tagline,
        DownloadSection,
    ],
    template: require('./home.template.html')
})

export class Tenant1_Home {
}
