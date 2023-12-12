import { Link } from 'react-router-dom';

export const HomePage = () => {

    return (
        <div>
            <h1>Home Page</h1>


            <section>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="Dish"
                                    src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 class="text-2xl font-bold sm:text-5xl">
                                    Mancunian Restaurant
                                </h2>

                                <p class="mt-6 text-gray-600">
                                    Welcome to Manchester's award-winning restaurant. (add more text here)
                                </p>

                                <Link
                                    to="/menu"
                                    // className="mt-8 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                    className="mt-8 inline-block px-12 py-3 text-lg font-medium text-green-600 hover:bg-transparent hover:text-yellow-600 focus:outline-none active:text-yellow-600"
                                >
                                    See our menu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
