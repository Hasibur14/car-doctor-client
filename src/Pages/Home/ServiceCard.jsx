
const ServiceCard = ({ service }) => {

    const { is,title, img, price } =service

    return (
        <div>
            <div className="max-w-lg p-6 rounded-xl shadow-lg dark:bg-gray-50 dark:text-gray-900 border">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-600">Service</span>
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <p className="text-xl font-bold text-red-500 dark:text-gray-800">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;