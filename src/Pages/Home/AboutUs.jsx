import parts from '../../..//src/assets/assets/images/about_us/parts.jpg';
import person from '../../..//src/assets/assets/images/about_us/person.jpg';



const AboutUs = () => {
    return (
        <div>
            <div className="hero lg:h-[600px] bg-base-200 rounded-xl my-16">
                <div className=" hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="absolute right-5 top-1/2 w-1/2 rounded-lg shadow-2xl border-8 border-white "/>
                    </div>
                    <div className='w-1/2 space-y-5'>
                        <h2 className='text-xl font-bold text-red-500'>About Us</h2>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
                        <button className="btn text-white text-lg bg-red-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;