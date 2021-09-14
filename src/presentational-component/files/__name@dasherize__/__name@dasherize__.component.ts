import {
    ChangeDetectionStrategy,
    Component, EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-<%= classify(name) %>-component',
    templateUrl: './<%= classify(name) %>.component.html',
    styleUrls: ['./<%= classify(name) %>.component.scss'],
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



