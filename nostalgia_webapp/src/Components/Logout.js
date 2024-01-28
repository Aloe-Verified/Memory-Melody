import {useAuth0} from '@auth0/auth0-react';
import '../Styles/Logout.css';
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const {user, logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div className='welcome'>
                <div className='profile'>
                    <Link to="/home">Composer</Link>
                    <div className="profile">
                        {user.picture && <img src={user.picture} alt={user.name}/>}
                        <button onClick={() => logout()}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default LogoutButton