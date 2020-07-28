import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  toggle: boolean = false;
  popover: string = "popover";
  constructor() { }

  ngOnInit(): void {
  }

  openLogin() {
    this.toggle = !this.toggle;
    this.popover = (this.toggle)? "popover open": "popover";
  }
}
