import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  numNotification : number;

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(
      data => {
        console.log(data);
        
        this.numNotification = data.length
      },
      err => console.log(err)
    )
  }

}
