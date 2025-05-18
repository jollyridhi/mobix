import Image from "next/image";
import dImage from '@/assets/homepage/daignostic.png';
import helloImpage from '@/assets/homepage/hellow.png';
import leptopImage from '@/assets/homepage/leptop.png';

const ServiceHeading = () => {
    return (
        <div className="mb-5 mx-5 d-flex justify-content-center" style={{ marginTop: "-5rem", fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
            <div className="row justify-content-center gap-4">
                {[{
                    image: dImage,
                    title: "PREMIUM REPAIRS",
                    subtitle: "Top-Quality Certified Parts",
                    text: "We exclusively use high-quality, certified components in every repair to ensure your device functions seamlessly and maintains its original performance. Each part is carefully selected to meet or exceed manufacturer standards, delivering lasting reliability and optimal results."
                }, {
                    image: helloImpage,
                    title: "INSTANT MOBILE REPAIR",
                    subtitle: "Fast Service by Skilled Technicians",
                    text: "Our expert technicians are trained to diagnose and resolve a wide range of mobile issues with speed and precision. Whether it’s a screen replacement, battery concern, or internal fault, we ensure efficient, high-quality repairs that restore your device to perfect working condition."
                }, {
                    image: leptopImage,
                    title: "GUARANTEED SAFETY",
                    subtitle: "Total Device & Data Security",
                    text: "Your privacy is our priority. We follow strict security protocols to keep your personal data safe and ensure your device is handled with the utmost care from start to finish."
                }].map((item, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card shadow-lg text-center border-0" style={{ backgroundColor: "#e6f0ff", borderRadius: "1rem", height: "100%" }}>
                            <div className="rounded-top bg-white py-3" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}>
                                <Image src={item.image} width={220} alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-primary fw-bold">{item.title}</h5>
                                <h6 className="text-dark">{item.subtitle}</h6>
                                <p className="card-text text-dark" style={{ fontSize: '0.9rem' }}>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceHeading;
