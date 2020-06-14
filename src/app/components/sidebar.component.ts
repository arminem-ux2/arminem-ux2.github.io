import {Component, Input, Output,EventEmitter} from '@angular/core';
import {SideBarItem} from "../utils/SideBarItem";
@Component({
    selector: 'sidebar',
    templateUrl : '../templates/sidebar.component.html'
})
export class SidebarComponent {

    @Input() title:string;
    @Input() closed:boolean = true;
    @Input() Items:SideBarItem[];
    @Output() itemclicked = new EventEmitter();

    constructor()
    {
        this.closed = true;
    }

    scrollToElement(id)
    {
        this.itemclicked.emit(id);
    }


    toggleSideBar()
    {
        this.closed = !this.closed;
    }
}