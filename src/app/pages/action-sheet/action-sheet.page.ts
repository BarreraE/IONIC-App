import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( public actionSheetCtrl:  ActionSheetController) { }

  ngOnInit() {
  }
  async presentActionSheet() { //EMC7 lo lleva a una promesa
    const actionSheet = await this.actionSheetCtrl.create({ //espera hasta que se crea componente
      header: 'Albums',
      backdropDismiss: false, //al ponerle false, solo se podrá cerrar al hcer clic en el boton que lo llamó o cancel de sheet
      buttons: [{
        text: 'Delete',
        role: 'destructive', //forma como se mostrará en el dispositico, colot
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => { //funcion que se activa cuando se hace clic en el boton
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
