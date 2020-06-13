import {Component} from '@angular/core';
import {SideBarItem} from "../utils/SideBarItem";

declare var $: any;

@Component({
    selector: 'paintings',
    templateUrl: '../templates/paintings.component.html'
})
export class PaintingsComponent {

    private SideBarItems: SideBarItem[];
    private slides1: Array<any> = [];

    constructor() {
        this.loadSideBar();
        this.loadSlides();
        this.grayScaleEffect(["#img1", "#img2", "#img3"]);

    }

    scrollToElement(value) {
        let elem: string = '#img' + value;
        // scrollTop:
        $('html, body').animate({
            scrollTop: $(elem).offset().top - 200
        }, 300);

        this.grayScaleEffect([elem]);
    }

    grayScaleEffect(items) {
        $({grayscalepercent: 100, blurradius: 3}).animate({grayscalepercent: 0, blurradius: 0}, {
            duration: 3000,
            easing: 'swing',
            step: function () {

                for (var i = 0; i < items.length; i++) {
                    $(items[i]).css({
                        "-webkit-filter": "blur(" + this.blurradius + "px) grayscale(" + this.grayscalepercent + "%)",
                        "filter": "blur(" + this.blurradius + "px) grayscale(" + this.grayscalepercent + "%)"
                        // "-webkit-filter": "grayscale(" + this.grayscalepercent + "%)",
                        // "filter": "grayscale(" + this.grayscalepercent + "%)"
                    });
                }
            }
        });
    }

    loadSideBar() {
        this.SideBarItems = [];

        let item1: SideBarItem = new SideBarItem();
        item1.id = "1";
        item1.imageLink = "../app/resources/sidebar/paintings/1.png";
        item1.name = "Project 1";
        item1.selected = false;
        this.SideBarItems.push(item1);

        let item2: SideBarItem = new SideBarItem();
        item2.id = "2";
        item2.imageLink = "../app/resources/sidebar/paintings/2.png";
        item2.name = "Project 2";
        item2.selected = false;
        this.SideBarItems.push(item2);


        let item3: SideBarItem = new SideBarItem();
        item3.id = "3";
        item3.imageLink = "../app/resources/sidebar/paintings/3.png";
        item3.name = "Project 3";
        item3.selected = false;
        this.SideBarItems.push(item3);
    }

    loadSlides() {
        this.slides1 = [];

        for (let i = 0; i < 4; i++) {
            this.slides1.push({
                image: '../app/resources/paintings/p1_' + i + '.png',
                imageId: 'img1'
            });
        }
    }
}