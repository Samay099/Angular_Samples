import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterLink } from '@angular/router';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BatchdetailsComponent, BatchlistComponent,RouterLink,HomepageComponent,InvalidpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingBasics';
}
