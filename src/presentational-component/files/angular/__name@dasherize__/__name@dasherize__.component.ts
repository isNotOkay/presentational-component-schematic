import {
    ChangeDetectionStrategy,
    Component, EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>-component',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>Component implements OnInit {
    @Input() public exampleInput: string;
    @Output() public exampleOutput: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    public ngOnInit(): void {
    }
}



