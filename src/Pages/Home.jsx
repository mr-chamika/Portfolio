import pic1 from '../assets/Home/Learnet Logo.png'

const Home = () => {

    return (
        <div class='flex flex-col gap-30 items-center pt-20'>

            <div>

                <img src={pic1} width='750px' height='250px' class='mx-auto pb-5' />
                <p class='w-250'>

                    Learnet is an educational platform developed during our
                    second year at university. It enables students to share
                    study materials, and access academic resources in one place.
                    I created the forum  feature, allowing users to post questions, engage in
                    discussions, and support peer learning. The project
                    promotes interactive, community-based education
                    and resource sharing <a class='text-blue-600' href='/home/learnet'>Visit Project</a>

                </p>


            </div>
        </div>

    );

}

export default Home;