import { Component } from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-button-search',
  standalone: true,
  imports: [
    Button,
    ButtonDirective],
  templateUrl: './button-search.component.html',
  styleUrl: './button-search.component.scss'
})

export class ButtonSearchComponent {
  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
