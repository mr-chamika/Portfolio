import pici1 from '../assets/forum.png'
import pici2 from '../assets/ss1.png'
import pici3 from '../assets/ss2.png'
import pici4 from '../assets/ss3.png'
import pici5 from '../assets/ss4.png'

const Post = () => {

    return (

        <div class='flex flex-col gap-20 items-center h-full my-10 '>

            <p class='w-[70%]'>

                Learnet is an educational platform we developed during
                our second year at university, designed to facilitate
                collaborative learning among students. The platform
                serves as a hub for sharing academic resources such as
                lecture notes, presentations, and study guides. One of
                its key features is the integrated forum, which I personally
                developed. This forum allows users to post questions, share
                answers, and engage in meaningful discussions on various
                academic topics. It supports threaded conversations,
                notifications, and basic moderation tools to ensure a
                constructive learning environment. The idea behind Learnet
                was to create a digital space that fosters peer-to-peer
                interaction and knowledge exchange, especially helpful
                during exam periods and group projects. By encouraging
                students to contribute and support each other, Learnet
                enhances the overall academic experience. The project
                was built using web tec

            </p>

            <img src={pici1} class='w-[50%]' />

            <p class='w-[70%]'>

                Above is the forum we created in our system.
                And these are the questions posted by the users
                in our system.

            </p>

            <img src={pici2} class='w-[50%]' />

            <p class='w-[70%]'>

                Above is the view we created in our system
                to questions display which are created
                by the logged user in our system. Also
                you can see more views of the forum that how
                create a question, comment, answer a question

            </p>

            <img src={pici3} class='w-[50%]' />
            <img src={pici4} class='w-[50%]' />
            <img src={pici5} class='w-[50%]' />


            <ul class='flex gap-20'>
                <li>Git hub : <a class='text-blue-600 hover:text-blue-200' href='https://github.com/mr-chamika/Learnet.git'>https://github.com/mr-chamika/Learnet.git</a></li>
                <li>Facebook : <a class='text-blue-600 hover:text-blue-200' href='https://web.facebook.com/last.hista'>https://web.facebook.com/last.hista</a></li>
                <li>LinkedIn : <a class='text-blue-600 hover:text-blue-200' href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'>https://www.linkedin.com/in/hasith-wijesinghe-3394062a2LinkedIn</a></li>
            </ul>


        </div>

    );

}

export default Post;