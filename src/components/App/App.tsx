import { useEffect, useState } from "react";
import "./App.module.css";
import fetchImage from "../services/api";
import toast from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Photo } from "../ImageCard/ImageCard.type";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const getPhotosData = async () => {
      try {
        if (!query) return;
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImage(query, page);
        if (results.length === 0) {
          toast.error("No images found. Try a different search query.", {
            duration: 2000,
            position: "top-right",
          });
          return;
        }
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosData();
  }, [query, page]);

  const handleChangeQuery = (newQuery: string) => {
    if (newQuery === query) {
      toast.error("Please change query!", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleClickPhoto = (imageUrl: string) => {
    setSelectedPhoto(imageUrl);
    setIsModalOpen(true);
  };

  const handleClickPhotoClose = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={handleClickPhoto} />
      )}
      {photos.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClickPhotoClose}
        image={selectedPhoto ?? undefined}
      />
    </>
  );
}
