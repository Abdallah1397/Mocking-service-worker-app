import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
const UserInformations = () => {
    // user informations
    const [userInformations, setUserInformations] = useState([]);
    // state for show users
    const [showUser, setShowUser] = useState(false);
    // alerts state
    const [alertState, setAlertState] = useState(false);
    const getUsers = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUserInformations(res.data);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setAlertState(true);
                }
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
            {alertState ? (
                <>
                    <h3>Not found!</h3>
                </>
            ) : null}
        </div>
    );
};
export default UserInformations;
