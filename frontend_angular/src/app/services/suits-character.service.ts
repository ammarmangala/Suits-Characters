import { Injectable } from '@angular/core';
import { SuitsCharacter } from '../models/suits-character';

@Injectable({
  providedIn: 'root'
})
export class SuitsCharacterService {

  constructor() { }

  public getSuitsCharacters() : SuitsCharacter[] {
    let character = new SuitsCharacter();
    character.id = 1;
    character.name = "Harvey Specter";
    character.firstName = "Gabriel";
    character.lastName = "Macht";
    character.jobTitle = "Lawyer";
    character.company = "Pearson Specter LLC";

    return [character];
  }
}
