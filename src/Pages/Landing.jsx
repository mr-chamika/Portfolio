import Background from '../assets/Landing Page/background-dark.jpg'

const Landing = () => {

    return (

        <div>

            <img class='absolute w-screen h-screen object-cover' src={Background} />
            <div class="absolute inset-0 flex flex-col gap-10 items-center justify-center">
                <p class='mask-b-from-neutral-400 text-5xl text-green-200'>HASITH WIJESINGHE</p>
                <nav class='flex gap-25 w-full h-17 justify-center'>

                    <a class='text-center w-60 border-1 py-5 px-15 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/about'>About</a>
                    <a class='text-center w-60 border-1 py-5 px-15 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/contact'>Contact Us</a>
                    <a class='text-center w-60 border-1 py-5 px-15 rounded-2xl text-gray-100 transtion hover:font-bold, hover:border-3 duration-200 ease-in' href='/home'>Home Page</a>

                </nav>
            </div>
        </div>



    );

}

export default Landing;