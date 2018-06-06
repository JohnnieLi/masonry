import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {
  
  messages: Subject<any>;
  
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
   }
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg,to) {
      var object = {
        action:"sendMessage",
        message :msg,
        to : to
      };
    this.messages.next(object);
  }


  setId(id) {
      var object = {
        action:"setId",
        id :id
      };
    console.log("setId",object);
    this.messages.next(object);
  }

}