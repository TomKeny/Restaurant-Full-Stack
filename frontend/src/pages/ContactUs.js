export const ContactUsPage = () => {
    return (
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="m-5 p-5 text-center border border-gray-600">
                <h1 className="text-4xl text-center m-5">Contact Us</h1>
                <br></br>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11295.23612595046!2d-2.261521758059809!3d53.476843434201484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1e8740a59fd%3A0x93130bd615bd8779!2sTHE%20FOOD%20COURT!5e0!3m2!1sen!2suk!4v1702471104132!5m2!1sen!2suk"
                    width="450" 
                    height="350" 
                    style={{ border:0}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className="ml-auto mr-auto">              
                </iframe>

                <h2 className="mb-6 text-base font-semibold text-white">TEL: 0161 232 0000</h2>
                <h2 className="mb-6 text-base font-semibold text-white">Email: manc@m.com</h2>                            
            </div>
            
        </div>
    )
}


