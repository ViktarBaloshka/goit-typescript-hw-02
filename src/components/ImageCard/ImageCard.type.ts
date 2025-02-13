export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}
export interface ImageCardProps {
  photo: Photo;
  onPhotoClick: (url: string) => void;
}
