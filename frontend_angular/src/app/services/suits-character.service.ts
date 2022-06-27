import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuitsCharacter } from '../models/suits-character';

@Injectable({
  providedIn: 'root'
})
export class SuitsCharacterService {

  private url = "SuitsCharacter";

  constructor(private http: HttpClient) { }

  public getSuitsCharacters() : Observable<SuitsCharacter[]> {
    return this.http.get<SuitsCharacter[]>(`${environment.apiUrl}/${this.url}`);
  }
}
