import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SideMenuComponent  implements OnInit {

  constructor(
    private modalController:ModalController,
    private router:Router
  ) { }

  ngOnInit() {}

  async closeMenu(){
    await this.modalController.dismiss();
  }

  async navigate(link:string){
    await this.closeMenu();
    await this.router.navigateByUrl(link);
  }

}
