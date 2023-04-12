export class Event {
    title: string;
    location: string;
    description: string;
    startDate: Date;
    endDate: Date;

    constructor(
        title: string, 
        location: string, 
        description: string, 
        startDate: Date,
        endDate: Date) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}