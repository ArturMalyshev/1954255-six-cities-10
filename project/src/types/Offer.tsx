import {City} from "./Map";

export type OfferType = {
  id: number,
  city: string,
  location: {
    latitude: number,
    longitude: number,
  },
  photo: string[],
  title: string,
  description: string,
  premium: boolean,
  type: string,
  rating: number,
  bedroomCount: string,
  maxGuests: string,
  price: number,
  options: string[],
  ownerInfo: {
    avatar: string,
    name: string,
    pro: boolean
  }
}

export type OfferArrayType = {
  data: OfferType[]
}

export type PropertyType = {
  data: OfferType[],
  child: JSX.Element
}

export type ReviewType = {
    avatar: string,
    name: string,
    stars: number,
    text: string,
    date: string
}

export type ReviewArray = {
  ReviewArray: ReviewType[]
}

export type CityArray = {
  cityArray: City[],
  changeCityAction: Function
  currentCity: string,
  dispatcher: Function,
}
