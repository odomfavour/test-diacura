import GenericLayouts from "../layouts/GenericLayouts"

const ContactUs = () => {
  return (
    <GenericLayouts>            
        <div className='font-Open-sans md:w-[90%] mx-auto px-8 md:py-20 py-10'>
            <h1 className="text-4xl font-bold text-[#062D45]">Contact us</h1>
            <div className="mt-10 md:flex justify-between items-center gap-5">
                <div className="md:w-[45%]">
                    <div className="">
                        <h5 className="font-semibold text-2xl text-[#3891CA] mb-2">Get in touch</h5>
                        <p className="font-normal text-lg">
                        Use our  contact form for all  information request or contact us directly using the contact information below. All information is treated with complete confidentiality and In accordance with our our data protection statement.
                        </p>
                    </div>
                    <div className="xl:mt-36 mt-10">
                        <p>
                            feel free to reach out to us via email or on phone
                        </p>
                        <div className="xl:flex justify-between items-center mt-5 mb-8 md:mb-0">
                            <h3 className="contact mb-4 xl:mb-0">diacuramed@gmail.com</h3>
                            <h3 className="contact">+2347049284028</h3>
                        </div>
                    </div>
                </div>
                <div className="md:w-[45%]">
                    <form action="">
                    <div className="flex justify-between items-center flex-col xl:flex-row gap-7 xl:gap-0">
                        <input type="text" name="fName" id="fName" placeholder="First Name" className="xl:w-[47%] w-full contact-details contact-shadow" required/>
                        <input type="text" name="lName" id="lName" placeholder="Last Name" className="xl:w-[47%] w-full contact-details contact-shadow" required/>
                    </div>
                    <div className="mt-7">
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full contact-details contact-shadow" required/>
                    </div>
                    <div className="mt-7">
                        <textarea name="message" placeholder="Message" rows={5} className="w-full contact-details contact-shadow"></textarea>
                    </div>
                    <div className="flex justify-end">
                    <div className="mt-10 xl:w-3/5 w-full">
                        <button className="bg-[#107BC0] w-full text-white rounded px-7 py-4 font-bold text-xl">
                            Submit
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>               
        </div>
    </GenericLayouts>
  )
}

export default ContactUs