export class Event {
    public title: string;
    public location: string;
    public description: string;
    public startDate: string;
    public endDate: string;

    constructor(
        title: string,
        location: string,
        description: string,
        startDate: string,
        endDate: string) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}