import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class SettingsComponent  implements OnInit {

  darkMode = false;

  constructor(
    private router: Router,
    private navController: NavController
  ) { 
    const theme = localStorage.getItem('theme');
    this.darkMode = theme === 'dark';
    document.body.classList.toggle('dark', this.darkMode);
  }

  ngOnInit() {}

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

}
