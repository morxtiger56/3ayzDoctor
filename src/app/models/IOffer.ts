import { IReviewable } from "./IReviewable"

export interface IOffer extends IReviewable {
  title: string
  price: number
  owner: string
  image_key: string
}
