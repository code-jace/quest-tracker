import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdventureService } from './service/adventure.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'qt-frontend';

  constructor(private adventureService: AdventureService) {
    adventureService.getAllAdventures().subscribe((adventures: any[]) => {
      console.log(adventures);
    })
  }
}
