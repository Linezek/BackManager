import { Component, OnInit } from '@angular/core';
import { BackAPIService } from '../back-api.service';

interface BeaconDevice {
  id?: number,
  beaconId?: string,
  major?: string,
  minor?: string
}

interface BeaconDeviceSend {
  id?: number,
  beaconId?: string,
  major?: Number,
  minor?: Number
}

interface BeaconPassage {
  date?: string,
  beaconID?: string,
  deviceID?: string,
  major?: string,
  minor?: string
}

interface BeaconNumberOfPassage {
  Id: string,
  nbOfPassage: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  devices: Array<BeaconDevice> = []
  passages: Array<BeaconPassage> = []
  nbOfPassage: Array<BeaconNumberOfPassage> = []
  statusUpdate: Number
  statusAdd: Number
  selectedBeacon: BeaconDevice
  majorUpdate: string
  minorUpdate: string
  nameAdd: string
  majorAdd: string
  minorAdd: string

  constructor(private backAPI: BackAPIService) { 
  }

  ngOnInit() {
    this.backAPI.getData("/beaconDevice").subscribe(response => {
      console.log(response)
      for (let key in response) {
        let value = response[key];
        var device: BeaconDevice = {
          id: value["id"],
          beaconId: value["beaconId"],
          major: value["major"],
          minor: value["minor"]
        }
        this.devices.push(device)
      }
    })
    this.backAPI.getData("/beaconPassages").subscribe(response => {
      console.log(response)
      for (let key in response) {
        let value = response[key];
        var passage: BeaconPassage = {
          date: value["date"],
          beaconID: value["beaconID"],
          deviceID: value["deviceID"],
          major: value["major"],
          minor: value["minor"]
        }
        this.passages.push(passage)
      }
    })
  }

  updateValueBeaconClick() {
    this.nbOfPassage = []
    var nbValue: number
    for (let key in this.devices) {
      let value = this.devices[key]
      console.log(value.beaconId)
      nbValue = 0
      for (let key in this.passages) {
        let valuePassage = this.passages[key]
        if (valuePassage.beaconID == "MyBeacon") {
          valuePassage.beaconID = "MyBeacon3"
        }
        if (value.beaconId == valuePassage.beaconID) {
          nbValue = nbValue + 1
        }
      }
      console.log("value.beaconId -> " + value.beaconId +  " nbValue -> " + nbValue)
      var nbOfPassageValue: BeaconNumberOfPassage = {
        Id: value.beaconId,
        nbOfPassage: nbValue
      }
      this.nbOfPassage.push(nbOfPassageValue)
    }
  }
  updateBeaconView(selectedBeacon) {
    if (selectedBeacon != undefined) {
      this.majorUpdate = selectedBeacon.major
      this.minorUpdate = selectedBeacon.minor
    }
  }
  sendUpdateBeaconClick() {
    console.log(this.selectedBeacon.id)
    console.log(this.selectedBeacon.beaconId)
    console.log(this.selectedBeacon.major)
    console.log(this.selectedBeacon.minor)
    var note: BeaconDeviceSend = {
      id: this.selectedBeacon.id,
      beaconId: this.selectedBeacon.beaconId,
      major: +this.majorUpdate,
      minor: +this.minorUpdate
    }
    this.backAPI.updateBeaconDevice(note).subscribe(response => {
      this.statusUpdate = response["status"]
    })

    }
    sendAddBeaconClick() {
      console.log(this.nameAdd)
      console.log(this.majorAdd)
      console.log(this.minorAdd)
      var note: BeaconDeviceSend = {
        beaconId: this.nameAdd,
        major: +this.majorAdd,
        minor: +this.minorAdd
      }
      this.backAPI.postBeaconDevice(note).subscribe(response => {
        this.statusAdd = response["status"]
      })
  
      }

}
