import { Pipe, PipeTransform } from '@angular/core';
// import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string): any {
    // let url = 'localhost:700/upload/';   
  
    if(!img || img == 'null'){      
      return 'no-image'
    }else{
      return img;
    }

    // switch (type) {
    //   case 'user':
    //     return url += '/users/' + img;
    //     break;
    //   case 'doctor':
    //     return url += '/doctors/' + img;
    //     break;
    //   case 'hospital':
    //     return url += '/hospitals/' + img;
    //     break;
    
    //   default:
    //     break;
    // }
  }

}
