import { Component, OnInit } from '@angular/core';
import { BackAPIService, NotificationData } from '../back-api.service';


export interface Device {
  name: string,
  token: string
}

@Component({
  selector: 'app-eol-notification',
  templateUrl: './eol-notification.component.html',
  styleUrls: ['./eol-notification.component.css']
})
export class EolNotificationComponent implements OnInit {
  badge: string
  sound: string = "ping.aiff"
  alert: string
  device: string
  status: Number
  devices: Array<Device> = []
  selectedDevice: Device

  constructor(private backAPI: BackAPIService) { }

  ngOnInit() {
    this.backAPI.getData("/device").subscribe(response => {
      console.log(response)
      for (let key in response) {
        let value = response[key];
        var device: Device = {
          name: value["name"],
          token: value["token"]
        }
        this.devices.push(device)
      }
    })
  }

  sendNoteClick() {
   var note: NotificationData = {
     badge: parseInt(this.badge),
     sound: this.sound,
     alert: this.alert,
     device: this.selectedDevice.token
   }
   console.log("note.device => ", this.selectedDevice.token)
    this.backAPI.postNotification(note).subscribe(response => {
      this.status = response["status"]
    })
  }
}
