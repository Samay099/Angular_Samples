import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit
{
    message : any; 
       
    constructor(private service : MarvellousService)
    {}

    ngOnInit()
    {
      this.service.getBatches().subscribe(data=>{
        this.message = data;
      })
    }
}
