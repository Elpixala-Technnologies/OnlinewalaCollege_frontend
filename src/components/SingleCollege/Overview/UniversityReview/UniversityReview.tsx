import React from "react";
import RatingSummary from "./RatingSummary";
import ReviewHighlights from "./ReviewHighlights";
import PopularTags from "./PopularTags";
import DetailedReviews from "./DetailedReviews";

interface ReviewData {
  ratingSummary: {
    overallRating: number;
    totalReviews: number;
    ratingDistribution: { [key: number]: number };
    categoryRatings: { [key: string]: number };
  };
  highlights: {
    likes: string[];
    dislikes: string[];
  };
  popularTags: { name: string; count: number }[];
  detailedReviews: {
    title: string;
    author: string;
    date: string;
    content: any;
    rating: number;
    helpful: number;
  }[];
}

const UniversityReview: React.FC = () => {
  const reviewData: ReviewData = {
    ratingSummary: {
      overallRating: 4.1,
      totalReviews: 402,
      ratingDistribution: { 5: 48, 4: 35, 3: 7, 2: 10, 1: 0 },
      categoryRatings: {
        Academics: 4,
        Infrastructure: 4,
        Placement: 4,
        Faculty: 4,
      },
    },
    highlights: {
      likes: [
        "Good academic environment",
        "Excellent faculty",
        "Strong alumni network",
        "Diverse course offerings",
      ],
      dislikes: [
        "Limited campus activities",
        "High fees",
        "Crowded canteen",
        "Strict attendance policy",
      ],
    },
    popularTags: [
      { name: "Courses", count: 45 },
      { name: "Degree", count: 41 },
      { name: "Experience", count: 38 },
      { name: "Infrastructure", count: 32 },
      { name: "Placements", count: 28 },
      { name: "Faculty", count: 25 },
      { name: "Hostel", count: 20 },
    ],
    detailedReviews: [
      {
        title: "A Brief About Manipal University Online",
        author: "Akshat",
        date: "Mar 25, 2024 11:52:05",
        content: {
          overall:
            "It is one of the top IT colleges in India. It is a place where you can compete with a lot of competitors like you. It provide a great academic environment.",
          placement:
            "No need to worry about placements because every small to international company visits this institute for placements and the average package is 17 - 20 LPA.",
          infrastructure:
            "The overall college contains a main academic building along with a large play ground, a canteen and hostels. The buildings are so nicely designed and it is very attractive.",
          faculty:
            "The faculty is very supportive, Interactive and are highly qualified. They are very helpful and always stands with students to help them. They also support us mentally sometimes.",
          hostel:
            "Hostels are much facilitating. Rooms are given with a fan, A shelf, an almirah, a bed and a study table and chair. The cleanliness is also not bad. The washrooms are available in each individual room.",
        },
        rating: 4,
        helpful: 0,
      },
      {
        title: "Great Learning Experience",
        author: "Priya",
        date: "Apr 10, 2024 09:45:30",
        content: {
          overall:
            "Manipal University offers a great learning experience with a perfect blend of academics and extracurricular activities.",
          placement:
            "Placements are excellent with a wide range of companies visiting the campus. The average package is quite competitive.",
          infrastructure:
            "The infrastructure is modern and well-maintained. The library and labs are equipped with the latest technology.",
          faculty:
            "Faculty members are knowledgeable and approachable. They make learning interesting and engaging.",
          hostel:
            "Hostel facilities are decent. Rooms are spacious and well-ventilated. The mess food is also quite good.",
        },
        rating: 5,
        helpful: 10,
      },
      {
        title: "Decent College with Good Opportunities",
        author: "Rahul",
        date: "May 5, 2024 14:20:10",
        content: {
          overall:
            "The college provides good opportunities for students in terms of internships and projects. The academic environment is competitive.",
          placement:
            "Placements are satisfactory with many reputed companies visiting the campus. The average package could be better.",
          infrastructure:
            "Infrastructure is good but can be improved. Some facilities need maintenance.",
          faculty:
            "The faculty is supportive but some are not very experienced. Overall, they provide good guidance.",
          hostel:
            "Hostels are okay. Rooms are a bit small and sometimes there are issues with cleanliness.",
        },
        rating: 3,
        helpful: 5,
      },
      {
        title: "Mixed Experience",
        author: "Sneha",
        date: "Jun 15, 2024 17:35:45",
        content: {
          overall:
            "My experience at Manipal University was mixed. While the academics were good, some aspects could be improved.",
          placement:
            "Placements are decent but not as great as advertised. The average package is on the lower side.",
          infrastructure:
            "The infrastructure is modern but some areas are not well-maintained. The sports facilities are good though.",
          faculty:
            "Faculty is a mix of experienced and new teachers. Some are very helpful while others are not very approachable.",
          hostel:
            "Hostel life is fun but the facilities could be better. The food in the mess is average.",
        },
        rating: 3,
        helpful: 2,
      },
    ],
  };

  return (
    <div className="p-4 bg-white mt-5">
      <h1 className="text-[20px] font-semibold mb-4">
        Why To Join Manipal University online - Reviews & Rating
      </h1>
      <RatingSummary data={reviewData?.ratingSummary} />
      <ReviewHighlights data={reviewData?.highlights} />
      <PopularTags tags={reviewData?.popularTags} />
      <DetailedReviews reviews={reviewData?.detailedReviews} />
    </div>
  );
};

export default UniversityReview;
