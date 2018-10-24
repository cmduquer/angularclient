import { Component, OnInit } from '@angular/core';
import { ChatmessageService } from '../shared/chatMessageService/chatmessage.service';
import { Observable } from 'rxjs/Observable';
;

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
	chatmessages: Array<any>;

  constructor(private chatMessageService: ChatmessageService) { }

  ngOnInit() {
  	this.chatMessageService.getAll().subscribe(data => {
  	  console.log(data);	
      this.chatmessages = data;
      console.log('------');
      console.log(this.chatmessages);
    });
  }

}
