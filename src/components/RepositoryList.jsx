import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'forms in react',
    url: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        console.log("Repositories changed!");
    }, [repositories]); 
    // every time the variable repositories changes (this argument is known as dependencies), the function in the first argument is executed

    useEffect(() => {
        console.log('fetching github');
        fetch('https://api.github.com/users/gabrielcedran/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []); 
    // empty dependencies means this effect will only be executed once when the component is rendered
    // as there is no variable to base further trigger of the function. Not providing empty array causes infinite loop.

    return (
        <section className='repository-list'>
            <h1>Repository List</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}