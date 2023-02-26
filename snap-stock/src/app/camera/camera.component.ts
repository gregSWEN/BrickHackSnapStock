import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  private receiptPhoto: File | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  handleCameraInput(cameraInput: FileList): void {
    this.receiptPhoto = cameraInput[0];

  }




}
