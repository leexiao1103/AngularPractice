import { Injectable } from '@angular/core';

@Injectable()
export class ModuleService {
  private _id: string;

  constructor() {
    this._id = (Math.random() * 1000).toFixed(0);
  }

  get id(): string {
    return this._id;
  }

  set id(input: string) {
    this._id = input;
  }
}
