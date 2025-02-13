import clsx from "clsx";
import s from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.type";

export default function ImageGallery({
  photos,
  onPhotoClick,
}: ImageGalleryProps) {
  return (
    <ul className={clsx(s.itemsGallery)}>
      {photos.map((photo) => (
        <li key={photo.id} className={clsx(s.item)}>
          <ImageCard photo={photo} onPhotoClick={onPhotoClick} />
        </li>
      ))}
    </ul>
  );
}
