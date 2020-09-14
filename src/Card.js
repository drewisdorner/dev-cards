import React, {useState, useEffect} from "react";

function Card(props) {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            // get data from dev.to-API
            let dev_data = await fetch(`https://dev.to/api/users/by_username?url=${props.username}`)
                            .then((res) => res.json())
                            .then((data) => data);

            setUser(dev_data);  // set  user data
        }
        fetchData();  // call the function
    }, [props.username] );

    return(
    <div className="card">
        <div className="user-image">
            <img src={user.profile_image} alt="User Profile"></img>
        </div>

        <div className="user-info">
            <div className="name">{user.name}</div>
            <div className="handle">@{user.username}</div>
            <div className="summary">{user.summary}</div>
        </div>
        <div className="location">{user.location}</div>
    </div>
    )
}

export default Card;