import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonSearchComponent} from "../button-search/button-search.component";


@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    FormsModule, InputTextModule, ButtonSearchComponent
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  value: string | undefined;
}


