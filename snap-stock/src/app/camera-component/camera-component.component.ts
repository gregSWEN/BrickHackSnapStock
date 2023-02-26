import { Component, OnInit } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';

@Component({
  selector: 'app-camera-component',
  templateUrl: './camera-component.component.html',
  styleUrls: ['./camera-component.component.css']
})
export class CameraComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
