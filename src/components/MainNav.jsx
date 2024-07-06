import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

export default function MainNav() {
    const { isAuth } = useAuth();
    return (
        <div className='center'>
            <nav>
                <div>
                    {isAuth && (
                        <Link to="/">Home • &nbsp;</Link>
                    )}
                    {isAuth && (
                        <>
                            <Link to="/urls">View Links • &nbsp;</Link>
                            <Link to="/urls/add">Add A Link</Link>
                        </>
                    )}
                </div>
                <div>
                    {isAuth ? (
                        <Link to="/logout">Logout</Link>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>&nbsp;
                            <Link to="/users/add">• Create Account</Link>
                        </>
                    )}
                </div>
            </nav>
            <p></p>
            <h1 className="center">SHRINKIFY URL</h1>
            <h2>WHERE WE, UM, SHRINK URLS</h2>
            <p></p>
            <img src="/public/shrinkGun.svg" className="gun"></img>
            <p></p>
        </div>
    );
}
