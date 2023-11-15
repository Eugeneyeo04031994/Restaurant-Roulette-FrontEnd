import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.css'
})
export class AlertMessageComponent {

  @Input()
  errorMessage!:string | null;

  handleAlertClose():void {
    console.log("Handing... ",this.errorMessage);
    this.errorMessage = null;
  }
}
