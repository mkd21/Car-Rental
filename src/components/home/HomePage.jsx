
import HeroSection from "./heroSection/HeroSection.jsx";
import FeaturedVehicle from "./featuredVehicles/FeaturedVehicle.jsx";
import Banner from "./bannerSection/Banner.jsx";
import CustomerReview from "./customerReviews/CustomerReviewSection.jsx";

export default function HomePage() {

    return (
        <>
            <HeroSection />
            <FeaturedVehicle />
            <Banner />
            <CustomerReview />
        </>
    );
}