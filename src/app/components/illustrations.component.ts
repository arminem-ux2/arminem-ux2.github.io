import { Component } from '@angular/core';
import {SideBarItem} from "../utils/SideBarItem";

declare var $: any;

@Component({
    selector: 'illustrations',
    templateUrl : '../templates/illustrations.component.html'
})
export class IllustrationsComponent {

    private SideBarItems: SideBarItem[];

    private slides1: Array<any> = [];
    private slides2: Array<any> = [];
    private slides3: Array<any> = [];

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
        item1.imageLink = "../app/resources/illustrations/sidebar/1.jpg";
        item1.name = "4 The Love Of Alcohol";
        item1.selected = false;
        this.SideBarItems.push(item1);

        let item2: SideBarItem = new SideBarItem();
        item2.id = "2";
        item2.imageLink = "../app/resources/illustrations/sidebar/2.jpg";
        item2.name = "4 The Love Of Alcohol";
        item2.selected = false;
        this.SideBarItems.push(item2);


        let item3: SideBarItem = new SideBarItem();
        item3.id = "3";
        item3.imageLink = "../app/resources/illustrations/sidebar/3.jpg";
        item3.name = "Eaden Creatives";
        item3.selected = false;
        this.SideBarItems.push(item3);


    }

    loadSlides() {

        this.slides1 = [];

        for (let i = 1; i < 8; i++) {
            this.slides1.push({
                image: '../app/resources/illustrations/slides/i1.' + i + '.jpg',
                imageId: 'img1'
            });
        }

        this.slides2 = [];

        for (let i = 1; i < 4; i++) {
            this.slides2.push({
                image: '../app/resources/illustrations/slides/i2.' + i + '.jpg',
                imageId: 'img2'
            });
        }

        this.slides3 = [];

        for (let i = 1; i < 5; i++) {
            this.slides3.push({
                image: '../app/resources/illustrations/slides/i3.' + i + '.jpg',
                imageId: 'img3'
            });
        }


    }
}