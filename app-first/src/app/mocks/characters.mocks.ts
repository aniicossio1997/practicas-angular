import { Character } from "../interfaces/character.interface";
import { v4 as uuidv4 } from 'uuid';
export const CharactersMock:Character[]=[
  { id:uuidv4(),
    name:'krilimn', 
    power:950
  },
  { id:uuidv4(),
    name:'Goku',
    power:7500
  },
  { id:uuidv4(),
    name: 'vegeta',
    power:6400
  }
]