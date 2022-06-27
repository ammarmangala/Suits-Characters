import { Component } from '@angular/core';
import { SuitsCharacter } from './models/suits-character';
import { SuitsCharacterService } from './services/suits-character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_angular';
  characters : SuitsCharacter[] = [];

  constructor(private suitsCharacterService: SuitsCharacterService) { }

  ngOnInit() : void {
    this.characters = this.suitsCharacterService.getSuitsCharacters();
    console.log(this.characters);
  }
}
