

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <a className="navbar-brand" href="#">Home</a>
                <div className="container-fluid">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="">Page</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}