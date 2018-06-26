import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
teamA = 0;
teamB = 0;



  constructor(public navCtrl: NavController) {

    
  }
  onclick(){
    this.teamA = 0;
    this.teamB = 0;
  }

onclickone(){
  this.teamA += 3;
  console.log(this.teamA);
}

onclicktwo(){
  this.teamA += 2;
  console.log(this.teamA);
  
}
  
onclickthree(){
  this.teamA += 1;
  console.log(this.teamA);
  
}
onclickfour(){
  this.teamB += 3;
  console.log(this.teamB);
  
}
onclickfive(){
  this.teamB += 2;
  console.log(this.teamB);
  
}
onclicksix(){
  this.teamB += 1;
  console.log(this.teamB);
  
}

}
