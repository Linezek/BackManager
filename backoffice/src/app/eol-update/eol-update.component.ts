import { Component, OnInit } from '@angular/core';
import { BackAPIService, Update } from '../back-api.service';

@Component({
  selector: 'app-eol-update',
  templateUrl: './eol-update.component.html',
  styleUrls: ['./eol-update.component.css']
})


export class EolUpdateComponent implements OnInit {
  version: string
  url: string
  content: string
  status: Number = 0

  constructor(private backAPI: BackAPIService) { }

  ngOnInit() {
  }

  updateClick() {
    console.log("version -> " + this.version)
    console.log("url -> " + this.url)
    console.log("content -> " + this.content)
    var update: Update = {
      version: this.version,
      url: this.url,
      content: this.content
    }
    this.backAPI.postUpdate(update).subscribe(response => {
      this.status = response["status"]
    })
  }
}
