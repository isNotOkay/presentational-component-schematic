import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>-component',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {
private readonly subscription: Subscription = new Subscription();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
