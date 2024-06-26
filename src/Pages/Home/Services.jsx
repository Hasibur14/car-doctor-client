import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className="my-16">
            <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-red-500">Service</h4>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;

