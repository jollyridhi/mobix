const services = [
    "SCREEN",
    "BATTERY",
    "MIC",
    "RECEIVER",
    "CHARGING JACK",
    "SPEAKER",
    "BACK PANEL",
    "PROXIMITY SENSOR",
    "AUX JACK",
    "FRONT CAMERA",
    "BACK CAMERA",
    "LCD Screen (Without Fingerprint Sensor)",
    "Motherboard Inspection Charges"
];

const OurService = () => {
    return (
        <div className="py-20">
            <div className="text-center mb-10">
                <h3 className="font-extrabold text-3xl text-black">OUR SERVICES</h3>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((label, index) => (
                        <div
                            key={index}
                            className="w-[140px] h-[140px] bg-white shadow-md rounded-lg flex items-center justify-center text-center text-sm font-semibold text-gray-800 hover:shadow-lg transition-shadow duration-300"
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurService;