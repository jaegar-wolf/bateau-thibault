import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToFb(url : string){
    window.location.href=url;
  }

  /*sendMailTo(app: any){
    this.emailComposer.getClients().then((apps: []) => {
      // Returns an array of configured email clients for the device
   });
   
   this.emailComposer.hasClient().then(app, (isValid: boolean) => {
    if (isValid) {
      // Now we know we have a valid email client configured
      // Not specifying an app will return true if at least one email client is configured
    }
   });
   
   this.emailComposer.hasAccount().then((isValid: boolean) => {
    if (isValid) {
      // Now we know we have a valid email account configured
    }
   });
   
   this.emailComposer.isAvailable().then(app, (available: boolean) => {
    if(available) {
      // Now we know we can send an email, calls hasClient and hasAccount
      // Not specifying an app will return true if at least one email client is configured
    }
   });
   
   let email = {
     to: 'max@mustermann.de',
     cc: 'erika@mustermann.de',
     bcc: ['john@doe.com', 'jane@doe.com'],
     attachments: [
       'file://img/logo.png',
       'res://icon.png',
       'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
       'file://README.pdf'
     ],
     subject: 'Cordova Icons',
     body: 'How are you? Nice greetings from Leipzig',
     isHtml: true
   }
   
   // Send a text message using default options
   this.emailComposer.open(email);
  } */

}
