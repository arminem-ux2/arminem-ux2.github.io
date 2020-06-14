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
    private slides2: Array<any> = [];
    private slides3: Array<any> = [];
    private slides4: Array<any> = [];
    private slides5: Array<any> = [];


    constructor() {
        this.loadSideBar();
        this.loadSlides();
        this.grayScaleEffect(["#img1", "#img2", "#img3", "#img4", "#img5"]);

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
        item1.imageLink = "../app/resources/paintings/sidebar/1.jpg";
        item1.name = "Portrait of a young man";
        item1.selected = false;
        this.SideBarItems.push(item1);

        let item2: SideBarItem = new SideBarItem();
        item2.id = "2";
        item2.imageLink = "../app/resources/paintings/sidebar/2.jpg";
        item2.name = "Feels/portrait of a life";
        item2.selected = false;
        this.SideBarItems.push(item2);


        let item3: SideBarItem = new SideBarItem();
        item3.id = "3";
        item3.imageLink = "../app/resources/paintings/sidebar/3.jpg";
        item3.name = "Cultural Prints/ Taraz";
        item3.selected = false;
        this.SideBarItems.push(item3);

        let item4: SideBarItem = new SideBarItem();
        item4.id = "4";
        item4.imageLink = "../app/resources/paintings/sidebar/4.jpg";
        item4.name = "Cultural Prints/Gyumri";
        item4.selected = false;
        this.SideBarItems.push(item4);

        let item5: SideBarItem = new SideBarItem();
        item5.id = "5";
        item5.imageLink = "../app/resources/paintings/sidebar/5.jpg";
        item5.name = "Old Man Dying";
        item5.selected = false;
        this.SideBarItems.push(item5);


        //
        //
        // let item6: SideBarItem = new SideBarItem();
        // item6.id = "6";
        // item6.imageLink = "../app/resources/paintings/sidebar/5.jpg";
        // item6.name = "Project 6";
        // item6.selected = false;
        // this.SideBarItems.push(item6);
        //
        // let item7: SideBarItem = new SideBarItem();
        // item7.id = "7";
        // item7.imageLink = "../app/resources/paintings/sidebar/5.jpg";
        // item7.name = "Project 7";
        // item7.selected = false;
        // this.SideBarItems.push(item7);
        //
        // let item8: SideBarItem = new SideBarItem();
        // item8.id = "8";
        // item8.imageLink = "../app/resources/paintings/sidebar/5.jpg";
        // item8.name = "Project 8";
        // item8.selected = false;
        // this.SideBarItems.push(item8);

    }

    loadSlides() {

        this.slides1 = [];

        for (let i = 1; i < 4; i++) {
            this.slides1.push({
                image: '../app/resources/paintings/slides/p1.' + i + '.jpg',
                imageId: 'img1'
            });
        }

        this.slides2 = [];

        for (let i = 1; i < 4; i++) {
            this.slides2.push({
                image: '../app/resources/paintings/slides/p2.' + i + '.jpg',
                imageId: 'img2'
            });
        }

        this.slides3 = [];

        for (let i = 1; i < 4; i++) {
            this.slides3.push({
                image: '../app/resources/paintings/slides/p3.' + i + '.jpg',
                imageId: 'img3'
            });
        }

        this.slides4 = [];

        for (let i = 1; i < 4; i++) {
            this.slides4.push({
                image: '../app/resources/paintings/slides/p4.' + i + '.jpg',
                imageId: 'img4'
            });
        }

        this.slides5 = [];

        for (let i = 1; i < 4; i++) {
            this.slides5.push({
                image: '../app/resources/paintings/slides/p5.' + i + '.jpg',
                imageId: 'img5'
            });
        }
    }

}