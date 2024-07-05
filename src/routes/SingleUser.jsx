import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    const {id} = params;

    const response = await fetch(`http://localhost:8000/users/${id}`);
    const data = await response.json();
    return {data}
}

const SingleUser = () => {
    const { data } = useLoaderData();

    return 
        <>
            <h2>USER INFORMATION</h2>
            <p>{data.username} is part of the gang! Here is his password. It's salty. Enjoy!</p>
        </>
};

export default SingleUser;