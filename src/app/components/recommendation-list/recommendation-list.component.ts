import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.scss'
})
export class RecommendationListComponent {

}
