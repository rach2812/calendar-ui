export class Event {
    public id: number;
    public title: string;
    public location: string;
    public description: string;
    public startDate: string;
    public endDate: string;

    constructor(
        id: number,
        title: string,
        location: string,
        description: string,
        startDate: string,
        endDate: string) {
        this.id = id;
        this.title = title;
        this.location = location;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}