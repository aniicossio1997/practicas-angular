import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharactersMock } from 'src/app/mocks/characters.mocks';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=CharactersMock
  onAddCharacter(character:Character):void{
    const newCharacter:Character={
      ...character,id:uuidv4()
    }
    this.characters.push(newCharacter)
  }

  onDeleteById(id:string):void{
    console.log({id})
    this.characters=this.characters.filter(character=> character.id !==id);
  }
}