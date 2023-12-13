import { Link } from "react-router-dom";
import image1 from "../images/pexels-chan-walrus-958545.jpg";
import image2 from "../images/pexels-shameel-mukkath-14883752.jpg";
import image3 from "../images/pexels-valeria-boltneva-1639565.jpg";
import image4 from "../images/pexels-leonardo-luz-13999216.jpg";



export const HomePage = () => {

    return (
        <div>

            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="food image"
                                    src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gold">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-5xl">
                                    Mancunian Restaurant
                                </h2>

                                <p class="mt-6">
                                    Welcome to Manchester's award-winning restaurant. (add more text here)
                                </p>

                                <Link
                                    to="/menu"
                                    className="mt-8 inline-block py-3 text-lg font-medium text-fancy-extra-dark-blue hover:text-white hover:underline focus:outline-none"
                                >
                                    See our menu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        {/* <!-- image - start --> */}
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            {/* <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}
                            <img src={image1} loading="miso" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />


                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
                        </a>
                        {/* <!-- image - end --> */}

                        {/* <!-- image - start --> */}
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={image2} loading="lazy" alt="burger" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
                        </a>
                        {/* <!-- image - end --> */}

                        {/* <!-- image - start --> */}
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={image3} loading="lazy" alt="samosas" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
                        </a>
                        {/* <!-- image - end --> */}

                        {/* <!-- image - start --> */}
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src={image4} loading="lazy" alt="chicken wings" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
                        </a>
                        {/* <!-- image - end --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}