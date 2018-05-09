import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Email } from '../email.model';
import { EmailService } from '../email.service';
import { EmailNewComponent } from '../email-new/email-new.component';

@Component({
  selector: 'app-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.css']
})
export class EmailEditComponent extends EmailNewComponent implements OnInit {

  public message: string;
  private id: number;

   constructor(route: ActivatedRoute, emailService: EmailService, router: Router) {
    super(route, emailService, router);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.to = params.email;
        this.name = params.name;
        this.message = params.message;
        this.subject = params.subject;
      }
    )
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }

  sendEmail(form: NgForm) {
    this.emailService.deleteMail(this.id).subscribe();
    super.sendEmail(form);
  }

  saveDraft(form: NgForm){
    this.emailToSend = new Email("draft", form.value.to, "My Email", "my_email@example.com", new Date().toString(), form.value.subject, form.value.message);
    this.emailService.saveDraft(this.id, this.emailToSend).subscribe();
    this.router.navigate(['/drafts']);
  }

}
