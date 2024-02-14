import { Component } from '@angular/core';
import { MarvellousPipe } from '../marvellous.pipe';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MarvellousPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
