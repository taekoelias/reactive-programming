import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService : NotificationService){

  }

  addNotification(){
    this.notificationService.addNotification("teste");
  }

  ngOnInit() {
  }

}
