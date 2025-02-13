import { ImageCardProps } from "../ImageCard/ImageCard.type";

export const ImageCard = ({ photo, onPhotoClick }: ImageCardProps) => {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => onPhotoClick(photo.urls.regular)}
      />
    </div>
  );
};
