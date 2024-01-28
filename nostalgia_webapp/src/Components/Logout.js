import {useAuth0} from '@auth0/auth0-react';
import '../Styles/Logout.css';

const LogoutButton = () => {
    const {user, logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div className='welcome'>
                <div className='profile'>
                    <h1>Welcome <span>{user.name}</span></h1>
                    {user.picture && <img src={user.picture} alt={user.name}/>}
                    <button onClick={() => logout()}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    )
}

export default LogoutButton