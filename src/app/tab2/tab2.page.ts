import { camera } from 'ionicons/icons'
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonAlert } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { PhotoService } from '../services/photo/photo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    NgFor,
    IonAlert,
  ]
})
export class Tab2Page {
  isAlertOpen = false
  alertContent = 'content'

  constructor(public photoService: PhotoService) {
    addIcons({ camera })
    this.photoService.loadSaved();
    setTimeout(async () => {
      this.showPhotoPaths()
    }, 2000)
  }

  // async ngOnInit() {
  //   await this.photoService.loadSaved();
  //   this.showPhotoPaths()
  // }

  showPhotoPaths() {
    this.alertContent = this.photoService.getState()
    this.setOpen(true)
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen
  }

}
