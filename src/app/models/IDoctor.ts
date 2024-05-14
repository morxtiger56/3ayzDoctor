import { IReviewable } from "./IReviewable"

export interface IDoctor extends IReviewable {
  name: string
  speciality: string
  price?: number
  work_place?: string
  profile_picture: string
}
