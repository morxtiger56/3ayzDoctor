import { Injectable } from '@angular/core';
import { IDoctor } from '../models/IDoctor';
import { IOffer } from '../models/IOffer';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  doctors: IDoctor[] = [
    {
      name: "alaa badawi",
      speciality: "professor",
      rating: 5,
      profile_picture: ""
    },
    {
      name: "nasser ghazlan",
      speciality: "professor",
      rating: 5,
      profile_picture: ""
    },
    {
      name: "abdallah hamed",
      speciality: "surgery",
      rating: 3,
      profile_picture: ""
    },
    {
      name: "Hesham el sa8ir",
      speciality: "professor",
      rating: 2,
      profile_picture: ""
    },
    {
      name: "tarek ismail",
      speciality: "professor",
      rating: 5,
      profile_picture: ""
    }
  ]

  apiData: {
    end_point: "doctors",
    result: any[]
  }[] = [
      {
        end_point: "doctors",
        result: this.doctors
      }
    ]


  constructor() { }

  Get(end_point: string) {
    return this.apiData.find(e => e.end_point === end_point)?.result
  }
}
