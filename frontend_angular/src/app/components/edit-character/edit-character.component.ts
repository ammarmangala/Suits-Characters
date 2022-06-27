import {Component, Input, OnInit} from '@angular/core';
import {SuitsCharacter} from "../../models/suits-character";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  @Input() character?: SuitsCharacter;

  constructor() { }

  ngOnInit(): void {
  }

  updateCharacter(character:SuitsCharacter){ }

  deleteCharacter(character:SuitsCharacter){ }

  createCharacter(character:SuitsCharacter){ }

}
