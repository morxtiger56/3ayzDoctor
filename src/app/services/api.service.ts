import { Injectable } from '@angular/core';
import { IDoctor } from '../models/IDoctor';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  doctors: IDoctor[] = []

  constructor() { }

}
