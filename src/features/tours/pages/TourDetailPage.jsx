import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useTour } from "../hooks/useTour";
import TourHero from "../components/TourHero";
import TourDescription from "../components/TourDescription";
import TourPictures from "../components/TourPictures";
import TourReviews from "../components/TourReviews";
import TourCTA from "../components/TourCTA";
import Spinner from "../../../components/Spinner/Spinner";
import ErrorState from "../../../components/ErrorState/ErrorState";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const TourMap = lazy(() => import("../components/TourMap"));

export default function TourDetailPage() {
  const { slug } = useParams();
  const { data: tour, isLoading, isError, error } = useTour(slug);

  if (isLoading) return <Spinner fullPage />;
  if (isError) return <ErrorState message={error.message} />;
  console.log(tour.reviews);

  return (
    <>
      <Header />
      <TourHero tour={tour} />
      <TourDescription tour={tour} />
      <TourPictures images={tour.images} tourName={tour.name} />
      <Suspense fallback={<Spinner />}>
        <TourMap locations={tour.locations} />
      </Suspense>
      <TourReviews reviews={tour.reviews} />
      <TourCTA tour={tour} />
      <Footer />
    </>
  );
}
