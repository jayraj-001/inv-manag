import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  }

}

