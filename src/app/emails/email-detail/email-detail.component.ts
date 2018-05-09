import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Email } from '../email.model';
import { EmailService } from '../email.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  public currentEmail: Email;
  public id: number;
  public isSendShown: boolean = false;
  public isReplyShown: boolean = false;
  public isEditShown: boolean = false;
  public showOnSend: boolean = false;
  public showOnOthers: boolean = false;
  public currentParentRoute: string;

  constructor(private emailService: EmailService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.emailService.getEmail(+params['id']).subscribe(
          (email: Email) => {
            this.currentEmail = email; 
          }
        );
      }
    )

    this.currentParentRoute = this.route.snapshot.url[0].path;

    switch (this.currentParentRoute) {
      case 'inbox': 
        this.isReplyShown = true;
        this.showOnSend = true;
        break;
      case 'drafts': 
        this.isEditShown = true;
        this.showOnOthers = true;
        break; 
      case 'send': 
        this.showOnOthers = true;
        break; 
      default: this.isSendShown = false;
        break;
    }
  }

  deleteEmail() {
    this.emailService.deleteMail(this.id).subscribe();
    this.router.navigate([this.currentParentRoute]);
  }

}
