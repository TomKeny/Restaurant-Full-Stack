import { ReviewCard } from "../components/ReviewCard"

const dummyReviewData = [
    {
        "initial": "J",
        "name": "John Stones",
        "starRating": "5",
        "reviewText": "Quick and delicious! The food arrived piping hot and fresh, just like dining in. Their efficient service made ordering a breeze. A go-to for a hassle-free and tasty meal at home!",
        "date": "8th Dec 2023"
    },
    {
        "initial": "A",
        "name": "Anna Taylor",
        "starRating": "4",
        "reviewText": "The delivery was prompt, and the food retained its restaurant-quality taste. A convenient way to savor gourmet meals without leaving the comfort of your home. A delivery service that truly elevates the dining experience!",
        "date": "20th Nov 2023"
    },
    {
        "initial": "I",
        "name": "Ian Wright",
        "starRating": "5",
        "reviewText": "Lightning-fast service without compromising on taste! The food arrived fresh and packed with flavors, as if it was just served from the kitchen. A reliable option for a quick and scrumptious meal delivered right to your doorstep!",
        "date": "3rd Oct 2023"
    }
]

export const ReviewPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-10">
            <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gold text-white">
                <h1 className="py-5 text-4xl text-center">Reviews</h1>
                {
                    dummyReviewData.map((review, index) => (
                        <ReviewCard review={review} key={index}
                        />
                    ))
                }
            </div>
        </div>

    )





}