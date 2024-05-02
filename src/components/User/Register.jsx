import { Link } from 'react-router-dom';
import registerImg from '../../../src/assets/assets/images/login/login.svg';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);
        
    };




    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800 mt-10" >
                <div className="container mx-auto text-center   justify-between md:flex ">
                    <div className='w-[45%] lg:mt-16'>
                        <img src={registerImg} alt="" className="object-cover w-[80%]  rounded-md xl:col-span-3 dark:bg-gray-500" />
                    </div>
                    <div className="w-[50%] px-6 py-16 border-2 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <h1 className="text-3xl font-bold dark:text-gray-900">Please Register Your Account!</h1>
                        <form onSubmit={handleRegister} noValidate="" action="" className="self-stretch space-y-4 mt-10">
                            <div className='text-left'>
                                <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
                                <input id="name" name='name' type="text" placeholder="Your Name" className="w-full p-3 bg-slate-100 rounded-md focus:ring dark:border-gray-300 focus:dark:ring-rose-600" />
                            </div>
                            <div className='text-left'>
                                <label htmlFor="email" className="text-lg font-semibold">Email address</label>
                                <input id="email" name='email' type="text" placeholder="Email address" className="w-full p-3 bg-slate-100 rounded-md focus:ring dark:border-gray-300 focus:dark:ring-rose-600" />
                            </div>
                            <div className='text-left'>
                                <label htmlFor="photo" className="text-lg font-semibold">Your Photo URL</label>
                                <input id="photo" name='photo' type="text" placeholder="Photo URl" className="w-full p-3 bg-slate-100 rounded-md focus:ring dark:border-gray-300 focus:dark:ring-rose-600" />
                            </div>
                            <div className='text-left'>
                                <label htmlFor="password" className="text-lg font-semibold">Password</label>
                                <input id="password" name='password' type="text" placeholder="password" className="w-full p-3 bg-slate-100 rounded-md focus:ring dark:border-gray-300 focus:dark:ring-rose-600" />
                            </div>
                            <button  className="btn w-full py-2 bg-red-500 text-white text-lg font-semibold rounded-lg dark:text-gray-50 dark:bg-rose-600">login</button>
                        </form>

                        <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                            <p className="text-md text-center sm:px-6 dark:text-gray-600">Already have an account?
                                <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-green-500 font-bold dark:text-gray-800">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;