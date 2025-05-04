import Logo from '../assets/Navbar/logos.png';

const Navbar = () => {

    return (
        <div class='bg-blue-50 flex items-center justify-between w-full pr-3' >
            <a href='/'><img src={Logo} width='70px' class='bg-none' /></a>

            <nav class="flex gap-6 justify-end">

                <a href='/about'>About</a>
                <a href='/contact'>Contact Us</a>

            </nav>
        </div>
    );

}

export default Navbar;