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

  handleCameraInput(event: any): void {
    this.receiptPhoto = event;
  }




}
