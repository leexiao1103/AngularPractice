import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages/messages.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'angular practice';


  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
