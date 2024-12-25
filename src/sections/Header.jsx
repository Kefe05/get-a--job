import Logo from '../assets/getAJob-logo.png'


export default function Header(){
    return (
        <header>
            <div className="image-holder">
                <img src={Logo} alt="get a job logo "/>
            </div>
            <nav>
                <a href="#">Companies</a>
                <a href="#">Candidates</a>
                <a href="#">Assessment</a>
                <a href="#">Post a Job</a>
                <a href="#">Career  Advice</a>

                <div id="header-buttons">
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
            </nav>

        </header>
    )
}