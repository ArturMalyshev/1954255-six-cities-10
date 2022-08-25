import {City} from './Map';

export type OfferType = {
  id: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    name: string
  }
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  photo: string[],
  title: string,
  description: string,
  favorite: boolean,
  premium: boolean,
  type: string,
  rating: number,
  bedroomCount: number,
  maxGuests: number,
  previewImage: string,
  price: number,
  options: string[],
  ownerInfo: {
    avatar: string,
    name: string,
    id: number,
    pro: boolean
  }
}

export type OfferFromServer = {
  bedrooms: number
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  }
  description: string
  goods: [string]
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: [string]
  isFavorite: boolean
  isPremium: boolean
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
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
  changeCityAction: CallableFunction
  currentCity: string,
  dispatcher: CallableFunction,
}

export type SortType = {
  changeSortAction: CallableFunction,
}

export type userConfiguration = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
}

export type StateType = {
  city: string,
  offerArray: OfferType[],
  sortType: string,
  active : number | undefined,
  isDataLoaded: boolean,
  authorizationStatus: userConfiguration | false,
}

export type AppRouteType = {
  main: string,
  login: string,
  offer: string,
  logout: string,
  favorites: string
}

export type AuthData = {
  login: string;
  password: string;
};
