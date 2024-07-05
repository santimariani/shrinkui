import { Form, redirect } from 'react-router-dom';

export async function action({request}) {
    const formData = await request.formData();
    const userName = formData.get('userName');
    const userPassword = formData.get('userPassword');

    const data = { username: userName, hashed_password: userPassword };

    const addUser = await fetch('http://localhost:8000/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log('USER ADDED:', addUser);
    return redirect('/urls/add')
}

const AddUser = () => {
    return (
        <>
            <h2>CREATE USER</h2>
            &nbsp;
            <Form method='post' className='center'>
                <label>
                    Username&nbsp;
                    <input 
                        name="userName" 
                        type="email" 
                    />
                </label>&nbsp;
                <label>
                    Password&nbsp;
                    <input
                        name="userPassword"
                        type="password"
                    />
                </label>
                <p></p>
                <button type="submit" className='center'>ADD USER</button>
            </Form>
        </>
    );
};

export default AddUser;