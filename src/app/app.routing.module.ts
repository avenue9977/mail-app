import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmailsComponent } from "./emails/emails.component";
import { EmailDetailComponent } from "./emails/email-detail/email-detail.component";
import { EmailEditComponent } from "./emails/email-edit/email-edit.component";
import { EmailSendComponent } from "./emails/email-send/email-send.component";
import { EmailDraftsComponent } from "./emails/email-drafts/email-drafts.component";
import { EmailNewComponent } from "./emails/email-new/email-new.component";
import { EmailListComponent } from "./emails/email-list/email-list.component";
import { EmailInboxComponent } from "./emails/email-inbox/email-inbox.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/inbox', pathMatch: 'full' },
    { path: 'inbox', component: EmailInboxComponent },
    { path: 'inbox/:id', component: EmailDetailComponent },
    { path: 'drafts', component: EmailDraftsComponent},
    { path: 'drafts/:id', component: EmailDetailComponent },
    { path: 'drafts/:id/edit', component: EmailEditComponent },
    { path: 'send', component: EmailSendComponent },
    { path: 'send/:id', component: EmailDetailComponent },
    { path: 'new', component: EmailNewComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}