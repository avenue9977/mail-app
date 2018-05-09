import { Component, OnInit } from '@angular/core';
import { EmailService } from '../emails/email.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  showClass: string;
  successText: string;
  successResponce: any;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.sendSuccess.subscribe(
      (data) => this.successResponce = data
    )
  }

  ngDoCheck() {
    switch (this.successResponce) {
      case 'send':
        this.showClass = 'show';
        this.successText = 'Your email has been send.'
        break;
      case 'save':
        this.showClass = 'show';
        this.successText = 'Your draft has been saved.'
        break;  
      case 'delete':
        this.showClass = 'show';
        this.successText = 'The email has been deleted.'
        break;
      default:
        break;
    }
  }
}
