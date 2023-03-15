import { Component} from '@angular/core';
import { DbzService } from '../service/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl:'main-page.component.html'

})
export class MainPageComponent  {
  constructor(private dbzService:DbzService){
  }
  get characters():Character[]{
    return [...this.dbzService.characters]
  }
  onDeleteCharacterByID(id:string):void{
    this.dbzService.onDeleteById(id)
  }
  onNewCharacter(character:Character):void{
    this.dbzService.onAddCharacter(character)
  }
}
