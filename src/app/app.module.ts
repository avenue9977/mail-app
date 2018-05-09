import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmailsComponent } from './emails/emails.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmailListComponent } from './emails/email-list/email-list.component';
import { EmailDetailComponent } from './emails/email-detail/email-detail.component';
import { EmailEditComponent } from './emails/email-edit/email-edit.component';
import { EmailItemComponent } from './emails/email-list/email-item/email-item.component';
import { AppRoutingModule } from './app.routing.module';
import { EmailSendComponent } from './emails/email-send/email-send.component';
import { EmailDraftsComponent } from './emails/email-drafts/email-drafts.component';
import { EmailNewComponent } from './emails/email-new/email-new.component';
import { EmailSendItemComponent } from './emails/email-send/email-send-item/email-send-item.component';
import { EmailDraftsItemComponent } from './emails/email-drafts/email-drafts-item/email-drafts-item.component';
import { EmailInboxItemComponent } from './emails/email-inbox/email-inbox-item/email-inbox-item.component';
import { EmailInboxComponent } from './emails/email-inbox/email-inbox.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailService } from './emails/email.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmailsComponent,
    TopbarComponent,
    EmailListComponent,
    EmailDetailComponent,
    EmailEditComponent,
    EmailItemComponent,
    EmailSendComponent,
    EmailDraftsComponent,
    EmailNewComponent,
    EmailSendItemComponent,
    EmailDraftsItemComponent,
    EmailInboxComponent,
    EmailInboxItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
