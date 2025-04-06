'use client'

import { useInputContextStore } from '../context/InputStore';

const InputContext = () => {
    const { text, setText } = useInputContextStore();
    return (
        <div className='bg-white text-black p-10'>
            <input type="text" placeholder='Type Here'
                className='border' onChange={(e) => setText(e.target.value)}/>
                <p>{text}</p>
        </div>
    )
}

export default InputContext