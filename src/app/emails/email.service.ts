import { EventEmitter, Injectable } from "@angular/core";
import { Email } from "./email.model";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class EmailService {
    public sendSuccess = new EventEmitter<String>();
    
    constructor(private http: Http){}

    getInbox() {
        return this.http.get('http://localhost:8080/api/inbox').map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    getSend() {
        return this.http.get('http://localhost:8080/api/send').map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    getDrafts() {
        return this.http.get('http://localhost:8080/api/drafts').map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    getEmail(id) {
        return this.http.get('http://localhost:8080/api/emails/' + id).map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    sendEmail(email: Email) {
        email.type === 'send' ? this.sendSuccess.emit('send') : this.sendSuccess.emit('save');
        return this.http.post('http://localhost:8080/api/emails/', email);
    }

    saveDraft(id, email: Email) {
        this.sendSuccess.emit('save');
        return this.http.put('http://localhost:8080/api/emails/' + id, email);
    }

    deleteMail(id) {
        this.sendSuccess.emit('delete');
        return this.http.delete('http://localhost:8080/api/emails/' + id).map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
}