import {OfferFromServer, OfferType} from '../types/Offer';

export default function adaptDataFromServer (data: OfferFromServer[]) : OfferType[]
{
  const result : OfferType[] = [];
  data.map( (offer)=>{
    const newOffer:OfferType = {
      id: offer.id,
      city: {
        location: {
          latitude: offer.city.location.latitude,
          longitude: offer.city.location.longitude,
          zoom: offer.city.location.zoom,
        },
        name: offer.city.name,
      },
      location: {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        zoom: offer.location.zoom,
      },
      photo: offer.images,
      title: offer.title,
      description: offer.description,
      favorite: offer.isFavorite,
      premium: offer.isPremium,
      type: offer.type,
      rating: offer.rating,
      bedroomCount: offer.bedrooms,
      maxGuests: offer.maxAdults,
      previewImage: offer.previewImage,
      price: offer.price,
      options: offer.goods,
      ownerInfo: {
        avatar: offer.host.avatarUrl,
        name: offer.host.name,
        id: offer.host.id,
        pro: offer.host.isPro
      }
    };
    result.push(newOffer);
  });

  return result;
}
