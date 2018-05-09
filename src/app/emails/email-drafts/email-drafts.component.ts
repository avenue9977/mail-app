import { Component, OnInit } from '@angular/core';
import { EmailListComponent } from '../email-list/email-list.component';
import { Email } from '../email.model';
import { EmailService } from '../email.service';

@Component({
    selector: 'app-email-drafts',
    templateUrl: './email-drafts.component.html',
    styleUrls: ['./email-drafts.component.css']
})
export class EmailDraftsComponent extends EmailListComponent implements OnInit {

    constructor(emailService: EmailService) {
        super(emailService);
    }

    ngOnInit() {
        this.emailService.getDrafts().subscribe(
            (emails: Email[]) => this.emails = emails
        );
    }

    ngDoCheck() {
        if (this.emails) {
            (this.emails.length > 0) ? this.hasEmails = true : this.hasEmails = false;
        }
    }

}
