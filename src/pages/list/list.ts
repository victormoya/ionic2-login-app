import { Component } from '@angular/core';

import { ActionSheetController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { PeopleService } from '../../providers/people-service'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [PeopleService]
})
export class ListPage {
  public people: any;

  constructor(public peopleService: PeopleService, 
              public ActionSheetCtrl: ActionSheetController) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load().then(data => {
      this.people = data;
    });
  }

    showActionSheet() {
      let actionSheet = this.ActionSheetCtrl.create({
          title: 'Acciones',
          buttons: [
              {
                  text: 'Sentar',
                  handler: () => {
                      console.log('Sentar clicked');
                  }
              }
          ]
      });
      actionSheet.present();
  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
