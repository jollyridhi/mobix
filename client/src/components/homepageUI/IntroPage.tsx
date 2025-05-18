import Image from "next/image"
import pImage from '@/assets/homepage/phone repair.png';

const IntroPage = () => {
    return (
        <div className="mx-5" style={{ marginTop: '7.5rem', marginBottom: '7rem' }}>
            <div className="row container justify-content-center mx-auto">
                <div className="col-5">
                    <Image src={pImage} className="w-100 h-100" alt="Image" />
                </div>
                <div className="col-7">
                    <h2 className="text-bold mb-3">WELCOME TO <span className="text-secondary">FixYourPhone</span>
                    </h2>
                    <p className="text-black mb-4">
                        Hi there! We’re Fix My Phone — your go-to solution for quick, reliable, and affordable phone repair services. With a team of skilled technicians and a passion for tech, we’re here to bring your devices back to life with care and precision.
                    </p>

                    <div className="row container rounded py-4" style={{background:'#d7ded6'}}>
                        <div className="col-6 mb-4">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-time-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">Low Cost Services</h4>
                                    <p className="form-text text-black">
                                       We believe in delivering high-quality repairs without breaking the bank. Our pricing is transparent, competitive, and value-driven.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mb-4">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-price-tag-line text-white" style={{ fontSize: "3rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">Fast Delivery</h4>
                                    <p className="form-text text-black">
                                        Your time matters. That’s why we offer quick turnaround times to ensure you get your device back in perfect condition—fast.
                                         </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-truck-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4 className="mb-0">24/7 Live Support</h4>
                                    <p className="form-text text-black">
                                        Need help or have a question? Our friendly support team is always here to assist you—anytime, anywhere.
                                          </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex gap-3">
                                <div className="bg-secondary p-2 rounded-circle d-flex align-items-center" style={{ height: "70px", width: "70px" }}>
                                    <i className="ri-customer-service-2-line text-white" style={{ fontSize: "3.5rem" }}></i>
                                </div>
                                <div>
                                    <h4>Certified Technicians</h4>
                                    <p className="form-text text-black">
                                        Our repairs are handled by trained professionals using quality parts and trusted tools, ensuring your device is in the best hands.
                                           </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage