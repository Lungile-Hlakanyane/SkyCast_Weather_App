import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule} from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class PolicyComponent  implements OnInit {
   policies = [
    {
      title: 'Privacy Policy',
      content: `We value your privacy and ensure your data is protected. 
      We will never sell your personal information to third parties.`
    },
    {
      title: 'Terms of Service',
      content: `By using our application, you agree to follow our terms and conditions, 
      including acceptable use of the platform and respecting other users.`
    },
    {
      title: 'Data Usage Policy',
      content: `We use your location data only to provide weather forecasts. 
      This data is never stored or shared without your consent.`
    }
  ];

  constructor(
    private navController: NavController
  ) { }

  goBack(){
    this.navController.back();
  }

  ngOnInit() {}

}
