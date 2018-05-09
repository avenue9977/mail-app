import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Email } from '../email.model';
import { EmailService } from '../email.service';

@Component({
    selector: 'app-email-new',
    templateUrl: './email-new.component.html',
    styleUrls: ['./email-new.component.css']
})
export class EmailNewComponent implements OnInit {

    @ViewChild('f') sendForm: NgForm;

    public to: string;
    public name: string;
    public subject: string;
    public emailToSend: Email;

    constructor(protected route: ActivatedRoute, protected emailService: EmailService, public router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe(
            (params: Params) => {
                this.to = params.email;
                this.name = params.name;
                this.subject = params.subject;
            }
        )
    }

    sendEmail(form: NgForm){
        this.emailToSend = new Email("send", form.value.to, "My email", "my_email@example.com", new Date().toString(), form.value.subject, form.value.message);  
        this.emailService.sendEmail(this.emailToSend).subscribe();
        this.router.navigate(['/inbox']);
    }

    saveAsDraft(form: NgForm) {
        this.emailToSend = new Email("draft", form.value.to, "My email", "my_email@example.com", new Date().toString(), form.value.subject, form.value.message);
        this.emailService.sendEmail(this.emailToSend).subscribe();
        this.router.navigate(['/inbox']);
    }

}
