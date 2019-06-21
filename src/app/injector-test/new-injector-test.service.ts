import { Injectable } from '@angular/core';
import { MessageService } from '../messages/messages.service';
import { InjectorTestModule } from './injector-test.module';


@Injectable({
  providedIn: 'root'
})
export class NewInjectorTestService {
  private _id: string;
  private _testValue: string;

  constructor(private messageService: MessageService) {
    this.testValue = 'Injector';
    this.id = (Math.random() * 1000).toFixed(0);
  }

  get getTestValue(): string {
    return this._testValue;
  }

  set testValue(input: string) {
    this._testValue = input;
  }

  get id(): string {
    return this._id;
  }

  set id(input: string) {
    this._id = input;
  }

  log(input: string): void {
    this.messageService.add(`NewInjectorTestService: ${input}.`);
  }
}
