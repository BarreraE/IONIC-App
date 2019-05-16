import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  text:String;

  constructor(public alertCtrl: AlertController){ }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ //agregando codigo para crear más botones
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok', 
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Okay');
          }
        }
      ]      
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const input = await this.alertCtrl.create({
      header: 'WELCOME!!!',
      inputs: [
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Introduce your name'
        }, 
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            this.text = data.txtName;
            console.log('Confirm Ok', this.text);
          }
        }
      ]
    });
    await input.present();
  }


  ngOnInit() {
  }

}
 