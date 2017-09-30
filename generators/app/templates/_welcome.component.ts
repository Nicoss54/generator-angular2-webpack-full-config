import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'welcome',
    template: require('./welcome.component.html')
})

export class WelcomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
    }
}
