'use client';

import { useInputZStore } from "../store/inputZ";

const DZInput = () => {
    const { text, setText } = useInputZStore();

    return (
        <div className='bg-white text-black p-4 border mt-4'>
            <p className="">Typed: {text}</p>
        </div>
    );
};

export default DZInput;
