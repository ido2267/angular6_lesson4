import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: string): string {
     const defaultImage:string ="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/1x/8q/p01x8qtv.jpg";
    if (value)
    { return value;
     
    }
    else 
    return defaultImage;
  }


}
