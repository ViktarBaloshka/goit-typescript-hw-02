import { Photo } from "../ImageCard/ImageCard.type";

export interface ImageGalleryProps {
  photos: Photo[];
  onPhotoClick: (url: string) => void;
}
