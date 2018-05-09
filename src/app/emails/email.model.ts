export class Email {
    public id: number;
    public type: string;
    public to: string;
    public fromName: string;
    public fromEmail: string;
    public date: string;
    public subject: string;
    public message: string;

    constructor(type: string ,to: string, fromName: string, fromEmail: string, date: string, subject: string, message: string) {
        //this.id = id;
        this.type = type;
        this.to = to;
        this.fromName = fromName;
        this.fromEmail = fromEmail;
        this.date = date;
        this.subject = subject;
        this.message = message;
    }
}