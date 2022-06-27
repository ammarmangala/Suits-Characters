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
  characterToEdit?: SuitsCharacter;

  constructor(private suitsCharacterService: SuitsCharacterService) { }

  ngOnInit() : void {
    this.suitsCharacterService
    .getSuitsCharacters()
    .subscribe((result: SuitsCharacter[]) => (this.characters = result));
  }

  initNewCharacter() {
    this.characterToEdit = new SuitsCharacter();
  }

  editCharacter(character: SuitsCharacter){
    this.characterToEdit = character;
  }
}
