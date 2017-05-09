import { Component } from '@angular/core';

import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
      public ActionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController
      ) { }

  showActionSheet() {
      let actionSheet = this.ActionSheetCtrl.create({
          title: 'Modify your album',
          buttons: [
              {
                  text: 'Destructive',
                  role: 'destructive',
                  handler: () => {
                      console.log('Desctructive clicked');
                  }
              },{
                  text: 'Archive',
                  handler: () => {
                      console.log('Archive clicked');
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                      console.log('Cancel clicked');
                  }
              }
          ]
      });
      actionSheet.present();
  }

  showAlert() {
      let alert = this.alertCtrl.create();
      alert.setTitle('Take a seat');
      alert.setSubTitle('And relax');
      alert.addInput({
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
      });
      alert.addButton('OK');
      alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}




