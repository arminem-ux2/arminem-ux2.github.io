import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'main',
    templateUrl : '../templates/main.component.html'
})




export class MainComponent {

    private showMore:boolean = false;
    private mode:number; // 1-Main, 2-ui,3-Paint,4-Illustr,5-Brand

    private testInfo :string;
    constructor()
    {
        this.showMore = false;
        this.mode = 1;
    }
    OnMouseLeave()
    {
        this.mode=1;
    }

    OnMouseOver(value)
    {
        this.mode=1;

        if(value.offsetX >= 95 && value.offsetX <= 246 && value.offsetY >= 74 && value.offsetY <= 170)
            this.mode=2;
        else if(value.offsetX >= 305 && value.offsetX <= 466 && value.offsetY >= 0 && value.offsetY <= 96)
            this.mode=3;
        else if(value.offsetX >= 305 && value.offsetX <= 466 && value.offsetY >= 99 && value.offsetY <= 195)
            this.mode=4;
        else if(value.offsetX >= 305 && value.offsetX <= 466 && value.offsetY >= 198 && value.offsetY <= 294)
            this.mode=5;

        this.testInfo ='X:' +value.offsetX + ',' + 'Y:' +value.offsetY ;
    }

    loadMore()
    {
        this.mode = 6;
        this.showMore = true;

        // scrollTop: $("#scrlId").offset().top - 500
        $('html, body').animate({
            scrollTop: 500
        }, 1000);
    }
}