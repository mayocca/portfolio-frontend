import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Matías Yocca';

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
