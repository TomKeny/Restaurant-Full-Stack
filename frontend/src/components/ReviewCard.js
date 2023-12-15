import { StarIcon } from '@heroicons/react/24/outline';

export const ReviewCard = ({ review }) => {
    return (
        <div >
            <div className="flex flex-col gap-3 mt-14">
                <div className="flex flex-col gap-4">

                    <div className="flex justify justify-between border-b-4">
                        <div className="flex gap-2">
                            <span className="w-7 h-7 text-center align-middle rounded-full bg-black">
                                <span>{review.initial}</span>
                            </span>
                            <span>{review.name}</span>
                        </div>

                    </div>

                    <div className="flex p-1 gap-1 text-orange-300">


                        {
                            [...Array(5)].map((el, i) =>
                                i < review.starRating ? (
                                    <StarIcon className="h-5 w-5" fill="#fbd38d" />
                                ) : (
                                    <StarIcon className="h-5 w-5" />
                                )
                            )
                        }

                    </div>
                </div>

                <div>
                    {review.reviewText}
                </div>

                <div className="flex justify-between">
                    <span>{review.date}</span>
                </div>
            </div>
        </div>


    )
}