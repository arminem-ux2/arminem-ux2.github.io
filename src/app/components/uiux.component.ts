import { Component } from '@angular/core';
import {SideBarItem} from "../utils/SideBarItem";

declare var $: any;

@Component({
    selector: 'uiux',
    templateUrl : '../templates/uiux.component.html'
})
export class UiUxComponent {

    private SideBarItems: SideBarItem[];

    private slides1: Array<any> = [];
    private slides2: Array<any> = [];
    private slides3: Array<any> = [];
    // private slides4: Array<any> = [];
    // private slides5: Array<any> = [];
    // private slides6: Array<any> = [];
    // private slides7: Array<any> = [];
    // private slides8: Array<any> = [];
    // private slides9: Array<any> = [];
    // private slides10: Array<any> = [];
    // private slides11: Array<any> = [];


    constructor() {
        this.loadSideBar();
        this.loadSlides();
        //this.grayScaleEffect(["#img1", "#img2", "#img3", "#img4", "#img5","#img6", "#img7", "#img8", "#img9", "#img10", "#img11"]);
        //this.grayScaleEffect(["#img1", "#img2", "#img3", "#img4", "#img5","#img6", "#img7", "#img8"]);
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
        item1.imageLink = "../app/resources/uiux/sidebar/1.jpg";
        item1.name = "Fullbox";
        item1.selected = false;
        this.SideBarItems.push(item1);

        let item2: SideBarItem = new SideBarItem();
        item2.id = "2";
        item2.imageLink = "../app/resources/uiux/sidebar/2.jpg";
        item2.name = "AlignedCells";
        item2.selected = false;
        this.SideBarItems.push(item2);


        let item3: SideBarItem = new SideBarItem();
        item3.id = "3";
        item3.imageLink = "../app/resources/uiux/sidebar/3.jpg";
        item3.name = "Barracuda";
        item3.selected = false;
        this.SideBarItems.push(item3);

        // let item4: SideBarItem = new SideBarItem();
        // item4.id = "4";
        // item4.imageLink = "../app/resources/uiux/sidebar/4.jpg";
        // item4.name = "Bug Prediction";
        // item4.selected = false;
        // this.SideBarItems.push(item4);
        //
        // let item5: SideBarItem = new SideBarItem();
        // item5.id = "5";
        // item5.imageLink = "../app/resources/uiux/sidebar/5.jpg";
        // item5.name = "Strong Test";
        // item5.selected = false;
        // this.SideBarItems.push(item5);
        //
        // let item6: SideBarItem = new SideBarItem();
        // item6.id = "6";
        // item6.imageLink = "../app/resources/uiux/sidebar/6.jpg";
        // item6.name = "Copy/Pasted Code";
        // item6.selected = false;
        // this.SideBarItems.push(item6);
        //
        // let item7: SideBarItem = new SideBarItem();
        // item7.id = "7";
        // item7.imageLink = "../app/resources/uiux/sidebar/7.jpg";
        // item7.name = "Test Manager";
        // item7.selected = false;
        // this.SideBarItems.push(item7);
        //
        // let item8: SideBarItem = new SideBarItem();
        // item8.id = "8";
        // item8.imageLink = "../app/resources/uiux/sidebar/8.jpg";
        // item8.name = "Assignment Portal";
        // item8.selected = false;
        // this.SideBarItems.push(item8);

        // let item9: SideBarItem = new SideBarItem();
        // item9.id = "9";
        // item9.imageLink = "../app/resources/uiux/sidebar/9.jpg";
        // item9.name = "Project 9";
        // item9.selected = false;
        // this.SideBarItems.push(item9);
        //
        // let item10: SideBarItem = new SideBarItem();
        // item10.id = "10";
        // item10.imageLink = "../app/resources/uiux/sidebar/10.jpg";
        // item10.name = "Project 10";
        // item10.selected = false;
        // this.SideBarItems.push(item10);
        //
        // let item11: SideBarItem = new SideBarItem();
        // item11.id = "11";
        // item11.imageLink = "../app/resources/uiux/sidebar/11.jpg";
        // item11.name = "Project 11";
        // item11.selected = false;
        // this.SideBarItems.push(item11);

    }

    loadSlides() {

        this.slides1 = [];

        for (let i = 1; i < 5; i++) {
            this.slides1.push({
                image: '../app/resources/uiux/slides/u1.' + i + '.jpg',
                imageId: 'img1'
            });
        }

        this.slides2 = [];

        for (let i = 1; i < 7; i++) {
            this.slides2.push({
                image: '../app/resources/uiux/slides/u2.' + i + '.jpg',
                imageId: 'img2'
            });
        }

        this.slides3 = [];

        for (let i = 1; i < 7; i++) {
            this.slides3.push({
                image: '../app/resources/uiux/slides/u3.' + i + '.jpg',
                imageId: 'img3'
            });
        }

        // this.slides4 = [];
        //
        // for (let i = 1; i < 7; i++) {
        //     this.slides4.push({
        //         image: '../app/resources/uiux/slides/u4.' + i + '.jpg',
        //         imageId: 'img4'
        //     });
        // }
        //
        // this.slides5 = [];
        //
        // for (let i = 1; i < 7; i++) {
        //     this.slides5.push({
        //         image: '../app/resources/uiux/slides/u5.' + i + '.jpg',
        //         imageId: 'img5'
        //     });
        // }
        //
        //
        // this.slides6 = [];
        //
        // for (let i = 1; i < 6; i++) {
        //     this.slides6.push({
        //         image: '../app/resources/uiux/slides/u6.' + i + '.jpg',
        //         imageId: 'img6'
        //     });
        // }
        //
        // this.slides7 = [];
        //
        // for (let i = 1; i < 8; i++) {
        //     this.slides7.push({
        //         image: '../app/resources/uiux/slides/u7.' + i + '.jpg',
        //         imageId: 'img7'
        //     });
        // }
        //
        // this.slides8 = [];
        //
        // for (let i = 1; i < 5; i++) {
        //     this.slides8.push({
        //         image: '../app/resources/uiux/slides/u8.' + i + '.jpg',
        //         imageId: 'img8'
        //     });
        // }

        // this.slides9 = [];
        //
        // for (let i = 1; i < 5; i++) {
        //     this.slides9.push({
        //         image: '../app/resources/uiux/slides/u9.' + i + '.jpg',
        //         imageId: 'img9'
        //     });
        // }
        //
        // this.slides10 = [];
        //
        // for (let i = 1; i < 5; i++) {
        //     this.slides10.push({
        //         image: '../app/resources/uiux/slides/u10.' + i + '.jpg',
        //         imageId: 'img10'
        //     });
        // }
        //
        // this.slides11 = [];
        //
        // for (let i = 1; i < 5; i++) {
        //     this.slides11.push({
        //         image: '../app/resources/uiux/slides/u11.' + i + '.jpg',
        //         imageId: 'img11'
        //     });
        // }
    }

}