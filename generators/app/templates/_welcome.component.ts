import {Component} from '@angular/core';


@Component({
    selector: 'welcome',
    template:require('./welcome.component.html'),
    styles:[require('./welcome.component.scss').toString()],
})
export class WelcomeComponent {
    constructor() {}

}