import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {ButtonSearchComponent} from "./button-search/button-search.component";
import {SearchFormComponent} from "./search-form/search-form.component";

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [ButtonModule, AutoCompleteModule, ButtonSearchComponent, SearchFormComponent],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss'
})
export class HeaderSearchComponent {

}
