import { useState, useEffect } from "react";
import axios from "axios";
const UserInformations = () => {
    // user informations
    const [userInformations, setUserInformations] = useState([]);
    const [showUser, setShowUser] = useState(false);
    const getUsers = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUserInformations(res.data);
            });
    };
    useEffect(() => {
        getUsers();
    });
    // show user informations
    const handleClick = () => {
        getUsers();
        setShowUser(true);
    };
    return (
        <div>
            {userInformations.length > 0 ? (
                userInformations.map((item) => <h1>{item.name}</h1>)
            ) : (
                <>LeGrahamanne </>
            )}
            <button onClick={handleClick}>show user information</button>
            {showUser ? (
                userInformations.map((item) => <h1>{item.username}</h1>)
            ) : (
                <>LeGrahamanne </>
            )}
        </div>
    );
};
export default UserInformations;
