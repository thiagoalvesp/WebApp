import { Injectable, EventEmitter  } from '@angular/core';
import { Alert } from '../models/alert';

@Injectable()
export class MsgService {


  alertEmitter = new EventEmitter<Alert>();

  constructor() {}

  showAlert (type: string, msg: string) {
      this.alertEmitter.emit(new Alert(type, msg));
  }

}
