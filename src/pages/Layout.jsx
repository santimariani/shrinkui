import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='center'>
            <nav>
                <div>
                    <Link to="/">Home&nbsp;</Link>•&nbsp;
                    <Link to="/urls/add">Shrinkify URL&nbsp;</Link>•&nbsp;
                    <Link to="/urls">URLs Shrinkified&nbsp;</Link>
                </div>
                <div>
                    <Link to="/users/login">Log In&nbsp;</Link>•&nbsp;
                    <Link to="/users/add">Create Account</Link>
                </div>
            </nav>
            <p></p>
            <h1 className="center">SHRINKIFY URL</h1>
            <h2>WHERE WE, UM, SHRINK URLS</h2>
            <p></p>
            <img src="/public/shrinkGun.svg" className="gun"></img>
            <p></p>
            <Outlet />
        </div>
    );
};

export default Layout; 