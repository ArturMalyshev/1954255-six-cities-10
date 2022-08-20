import { OfferType } from './Offer';

export type City = {
  name: string,
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Point = OfferType;

export type Points = Point[];
