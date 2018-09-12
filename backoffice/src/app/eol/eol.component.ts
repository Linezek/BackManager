import { Component, OnInit } from '@angular/core';
import { BackAPIService, Update } from '../back-api.service';

interface Device {
  name: string,
  version: string,
  serial: string,
  token: string
}

@Component({
  selector: 'app-eol',
  templateUrl: './eol.component.html',
  styleUrls: ['./eol.component.css']
})
export class EolComponent implements OnInit {
  devices: Array<Device> = []
  updates: Array<Update> = []

  constructor(private backAPI: BackAPIService) { 

  }

  ngOnInit() {
    this.backAPI.getData("/device").subscribe(response => {
      console.log(response)
      for (let key in response) {
        let value = response[key];
        var device: Device = {
          name: value["name"],
          version: value["version"],
          serial: value["serial"],
          token: value["token"]
        }
        this.devices.push(device)
      }
    })
    this.backAPI.getData("/update/all").subscribe(response => {
      console.log(response)
      for (let key in response) {
        let value = response[key];
        var update: Update = {
          version: value["version"],
          url: value["url"],
          content: value["content"]
        }
        this.updates.push(update)
      }
    })
  }

}
