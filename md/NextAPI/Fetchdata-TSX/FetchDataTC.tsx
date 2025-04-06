'use client';

import { useState, useEffect } from 'react';

interface Data {
    userId: string;
    id: number;
    title: string;
    body: string;
}

const Comps = () => {
    const [data, setData] = useState<Data[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await res.json();
                console.log('Fetched Data:', result);
                setData(result);

            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h3>Next App</h3>
            <br />
            <ul>
                {data?.map((val) => (
                    <li key={val.id}>
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comps;
