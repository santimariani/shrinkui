import { useLoaderData } from "react-router-dom";

export async function loader({params}) {
    const {id} = params;

    const response = await fetch(`http://localhost:8000/urls/${id}`);
    const data = await response.json();
    return {data}
}

const SingleUrl = () => {
    const { data } = useLoaderData();

    return (
        <>
            <h2>URL INFO</h2>
            <p>ORIGINAL URL: {data.long_url}</p>
            <p>SHRINKIFIED INTO: {data.short_url}</p>
            <br></br>
            <p>SUBMITTED BY: {data.user_id}</p>
            <p>CREATED ON: {data.creation_date}</p>

        </>
    )
};

export default SingleUrl;