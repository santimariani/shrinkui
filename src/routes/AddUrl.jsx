import { Form, redirect } from 'react-router-dom';

export async function action({request}) {
    const formData = await request.formData();
    const long_url = formData.get('long_url');
    const title = formData.get('title');

    const data = { long_url: long_url, title: title };

    const addUrl = await fetch('http://localhost:8000/urls/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log('URL SHRINKIFIED:', addUrl);
    return redirect('/')
}

const AddUrl = () => {
    return (
        <>
            <h2>SHRINKIFY URL</h2>
            &nbsp;
            <Form method='post' className='center'>
                <label>
                    URL to Shrink&nbsp;
                    <input 
                        name="long_url" 
                        type="url" 
                    />
                </label>&nbsp;
                <label>
                    Title (Optional)&nbsp;
                    <input
                        name="title"
                        type="text"
                    />
                </label>
                <p></p>
                <button type="submit" className='center'>SHRINKIFY!</button>
            </Form>
            <p></p>
            <Form className='center'>
                <label>
                    New URL&nbsp;
                    <input></input>
                </label>
            </Form>
        </>
    );
};

export default AddUrl;