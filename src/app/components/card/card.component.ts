import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardModule,
    Button
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() ad: any;
}
