import { Component, OnInit } from '@angular/core';
import { EmailListComponent } from '../email-list/email-list.component';
import { EmailService } from '../email.service';
import { Email } from '../email.model';

@Component({
    selector: 'app-email-send',
    templateUrl: './email-send.component.html',
    styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent extends EmailListComponent implements OnInit  {

    constructor(emailService:EmailService) {
        super(emailService);
    }

    ngOnInit() {
        this.emailService.getSend().subscribe(
            (emails: Email[]) => this.emails = emails
        );
    }

    ngDoCheck() {
        if (this.emails) {
            (this.emails.length > 0) ? this.hasEmails = true : this.hasEmails = false;
        }
    }
}
