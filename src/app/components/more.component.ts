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
        item1.TimelineWorkDateFrom = "October 2016-Present";
        item1.TimelineWorkDateTo = "Freelance";
        item1.TimelineWorkPlace = "UI/UX";
        item1.TimelineWorkTitle = "";
        item1.TimelineWorkInfoLess = "Web Visuals";
        item1.TimelineWorkInfoMore = "Game Interactions";
        item1.TimelineWorkInfoShowMore = false;
        this.Items.push(item1);

        let item2:TimeLineModel  = new TimeLineModel();
        item2.HeaderWorkDateText = "2015 - 2016";
        item2.HeaderWorkTitle = "Interaction Designer";
        item2.HeaderWorkPlace = "DevFactory";
        item2.TimelineWorkDateFrom = "2015 - 2016(Full time Remote)";
        item2.TimelineWorkDateTo = "DevFactory";
        item2.TimelineWorkPlace = "Interaction Designer";
        item2.TimelineWorkTitle = "";
        item2.TimelineWorkInfoLess = "Saas Products for devs";
        item2.TimelineWorkInfoMore = "Interaction Design";
        item2.TimelineWorkInfoShowMore = false;
        this.Items.push(item2);

        let item3:TimeLineModel  = new TimeLineModel();
        item3.HeaderWorkDateText = "2013- 2015";
        item3.HeaderWorkTitle = "Intraction Designer/ UI/UX";
        item3.HeaderWorkPlace = "KSPE Software";
        item3.TimelineWorkDateFrom = "2013- 2015(full time)";
        item3.TimelineWorkDateTo = "KSPE Software";
        item3.TimelineWorkPlace = "Intraction Designer/ UI/UX";
        item3.TimelineWorkTitle = "";
        item3.TimelineWorkInfoLess = "Mobile Applications";
        item3.TimelineWorkInfoMore = "Web multipurpose platforms";
        item3.TimelineWorkInfoShowMore = false;
        this.Items.push(item3);

        let item4:TimeLineModel  = new TimeLineModel();
        item4.HeaderWorkDateText = "2013 – 2014";
        item4.HeaderWorkTitle = "Graphic/ UI/UX designer";
        item4.HeaderWorkPlace = "Unified Software LLC";
        item4.TimelineWorkDateFrom = "2013 – 2014 (remote)";
        item4.TimelineWorkDateTo = "Unified Software LLC";
        item4.TimelineWorkPlace = "Graphic/ UI/UX designer";
        item4.TimelineWorkTitle = "";
        item4.TimelineWorkInfoLess = "Saas Dashboards";
        item4.TimelineWorkInfoMore = "Mobile Applications";
        item4.TimelineWorkInfoShowMore = false;
        this.Items.push(item4);

        let item5:TimeLineModel  = new TimeLineModel();
        item5.HeaderWorkDateText = "2011-2013";
        item5.HeaderWorkTitle = "UI/UX, Graphic Designer";
        item5.HeaderWorkPlace = "Freelancer";
        item5.TimelineWorkDateFrom = "2011-2013";
        item5.TimelineWorkDateTo = "Freelancer";
        item5.TimelineWorkPlace = "UI/UX, Graphic Designer";
        item5.TimelineWorkTitle = "";
        item5.TimelineWorkInfoLess = "Mineh co. LTD,Threadless.com";
        item5.TimelineWorkInfoMore = "Teddy Gifts,Fashionisers.com";
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