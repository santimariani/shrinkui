import { useLoaderData, Link } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();

    return { data };
}

const Users = () => {
    const { data } = useLoaderData();
    console.log("Data?", data);
    return (
        <>
            <h2>USERS</h2>
            <p>Here's them peeps, 'cause HIPPA ain't got no jurisdiction around these parts:</p>
            <ul>
                {data.map((user, index) => {
                    console.log(user)
                    return (
                        <li key={index}>
                            <Link to={`${user.id}`}>
                                {user.username}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Users;