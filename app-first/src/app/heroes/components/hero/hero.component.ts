import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='iroman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getDescription():string{
    return `${this.name} - ${this.age}`
  }
  changeHero():void{
    this.name="spiderman"
  }
  changeAge():void{
    this.age=25
  }
  reset(){
    this.age=45;
    this.name='iroman'
  }

}
