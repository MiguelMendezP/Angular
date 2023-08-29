import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public image:string = "https://i.ytimg.com/vi/-KkoelS6dnc/maxresdefault.jpg";
  public Titulo:string = "Como hacer una miniatura";
  constructor(){ }

  ngOnInit(): void {

  }

}
