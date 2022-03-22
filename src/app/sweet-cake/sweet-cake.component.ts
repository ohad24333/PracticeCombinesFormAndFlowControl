import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { flatMap } from 'rxjs';
import { Cake } from './Cake';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  constructor() { }

  isValuesEntered:boolean = false;
  isThereAreTags:boolean =false;

  cake:Cake = {
    name: '',
    kind: '',
    tags: []
  };

  ngOnInit(): void {
  }

  handleSubmit(data:NgForm){
    this.cake.name = data.value.name;
    this.cake.kind = data.value.flavor;
    this.cake.tags = data.value.tags.split(",");
    if(this.cake.tags.length > 0 && this.cake.tags[0] != ""){
      this.isThereAreTags = true;
    }
    this.isValuesEntered = true;
    console.log(this.cake.tags);
  }
}
