import { useLoaderData, Link } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:8000/urls');
    const data = await response.json();

    return { data };
}

const Urls = () => {
    const { data } = useLoaderData();
    console.log("Data?", data);
    return (
        <div className='center'>
            <h2>URLS SHRINKIFIED</h2>
            <p></p>
            <ul className='center'>
                {data.map((url, index) => {
                    console.log(url)
                    return (
                        <li key={index}>
                            <Link to={`${url.id}`}>
                                {url.long_url}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Urls;