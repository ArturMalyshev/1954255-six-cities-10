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
