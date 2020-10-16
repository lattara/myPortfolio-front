import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label;
  @Input() disabled: string; // usage : 'disabled' or nothing
  @Input() icon: string;
  @Input() imageName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkButtonType(icon, imageName) {
    if (icon !== undefined && icon !== null) {
      return true;
    } else if (imageName !== undefined && imageName !== null) {
      return false;
    }
  }

  onClick() {
  }
}
