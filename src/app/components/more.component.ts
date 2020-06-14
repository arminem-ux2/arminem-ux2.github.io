import { Component } from '@angular/core';
import {TimeLineModel} from "../utils/TimeLineModel";
@Component({
    selector: 'more-info',
    templateUrl : '../templates/more.component.html'
})
export class MoreInfoComponent {

    private workPosition:string;
    private workTitle:string;
    private workPlace:string;

    private timelineModeFixed:number;
    private timelineMode:number;

    private Items:TimeLineModel[];
    constructor()
    {
        this.CreateTimeLineInfo();
        this.timelineModeFixed = 1;
        this.timelineMode = 1;
        this.workPosition = "Current Position";
        this.workPlace = "Freelance";
        this.workTitle = "UI/UX Designer";
    }

    CreateTimeLineInfo()
    {
        this.Items = [];

        let item1:TimeLineModel  = new TimeLineModel();
        item1.HeaderWorkDateText = "Current Position";
        item1.HeaderWorkTitle = "UI/UX Designer";
        item1.HeaderWorkPlace = "Freelance";
        item1.TimelineWorkDateFrom = "October 2016";
        item1.TimelineWorkDateTo = "Present";
        item1.TimelineWorkPlace = "Freelance";
        item1.TimelineWorkTitle = "UI/UX";
        item1.TimelineWorkInfoLess = "Lorem Ipsum is simply dummy text";
        item1.TimelineWorkInfoMore = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
        item1.TimelineWorkInfoShowMore = false;
        this.Items.push(item1);

        let item2:TimeLineModel  = new TimeLineModel();
        item2.HeaderWorkDateText = "December 2015 - October 2016";
        item2.HeaderWorkTitle = "Interaction Designer";
        item2.HeaderWorkPlace = "DevFactory";
        item2.TimelineWorkDateFrom = "December 2015";
        item2.TimelineWorkDateTo = "October 2016";
        item2.TimelineWorkPlace = "DevFactory";
        item2.TimelineWorkTitle = "Interaction Designer";
        item2.TimelineWorkInfoLess = "Lorem Ipsum is simply dummy text";
        item2.TimelineWorkInfoMore = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
        item2.TimelineWorkInfoShowMore = false;
        this.Items.push(item2);

        let item3:TimeLineModel  = new TimeLineModel();
        item3.HeaderWorkDateText = "??? - December 2015";
        item3.HeaderWorkTitle = "??? 3";
        item3.HeaderWorkPlace = "? 3";
        item3.TimelineWorkDateFrom = "? 3 from";
        item3.TimelineWorkDateTo = "December 2015";
        item3.TimelineWorkPlace = "??? 3";
        item3.TimelineWorkTitle = "? 3";
        item3.TimelineWorkInfoLess = "Lorem Ipsum is simply dummy text";
        item3.TimelineWorkInfoMore = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
        item3.TimelineWorkInfoShowMore = false;
        this.Items.push(item3);

        let item4:TimeLineModel  = new TimeLineModel();
        item4.HeaderWorkDateText = "??? - ??? 4";
        item4.HeaderWorkTitle = "??? 4";
        item4.HeaderWorkPlace = "? 4";
        item4.TimelineWorkDateFrom = "? 4 from";
        item4.TimelineWorkDateTo = "? 4 to";
        item4.TimelineWorkPlace = "??? 4";
        item4.TimelineWorkTitle = "? 4";
        item4.TimelineWorkInfoLess = "Lorem Ipsum is simply dummy text";
        item4.TimelineWorkInfoMore = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
        item4.TimelineWorkInfoShowMore = false;
        this.Items.push(item4);

        let item5:TimeLineModel  = new TimeLineModel();
        item5.HeaderWorkDateText = "??? - ??? 5";
        item5.HeaderWorkTitle = "??? 5";
        item5.HeaderWorkPlace = "? 5";
        item5.TimelineWorkDateFrom = "? 5 from";
        item5.TimelineWorkDateTo = "? 5 to";
        item5.TimelineWorkPlace = "??? 5";
        item5.TimelineWorkTitle = "? 5";
        item5.TimelineWorkInfoLess = "Lorem Ipsum is simply dummy text";
        item5.TimelineWorkInfoMore = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
        item5.TimelineWorkInfoShowMore = false;
        this.Items.push(item5);

    }

    showMore(value)
    {
        this.Items[value-1].TimelineWorkInfoShowMore = !this.Items[value-1].TimelineWorkInfoShowMore;
    }
    OnMouseOver(value)
    {
        this.timelineMode=value;
    }

    OnFixTimelineMode(value)
    {
        this.timelineModeFixed = value;
        this.timelineMode = value;
    }

}