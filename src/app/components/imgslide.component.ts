import {Component, Input} from '@angular/core';

@Component({
    selector: 'imgslider',
    templateUrl : '../templates/imgslide.component.html'
})
export class ImageSliderComponent {
    public noWrapSlides:boolean = false;
    @Input() slides:Array<any> = [];

    public constructor() {

    }

}