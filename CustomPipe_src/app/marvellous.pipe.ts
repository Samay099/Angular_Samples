import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})
export class MarvellousPipe implements PipeTransform 
{
  //{{'Demo' | marvellous : "Hello" : "World" : "Angular"}}

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    if(args[0] == "PPA")
    {
      return "Pre-Placement Activity"
    }

    if(args[0] == "Angular")
    {
      return "Angular with MEAN stack"
    }

    return null;
  }

}


