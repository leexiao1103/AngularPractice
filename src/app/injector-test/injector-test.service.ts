import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectorTestService {
  private _testValue: string;

  constructor() {
    this.testValue = 'Injector';
  }

  get getTestValue(): string {
    return this._testValue;
  }

  set testValue(input: string) {
    this._testValue = input;
  }
}
