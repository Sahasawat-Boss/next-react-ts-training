'use client';

import { useInputZStore } from "../store/inputZ";

const InputZComp = () => {
    const { text, setText } = useInputZStore();

    return (
        <div className='bg-white text-black p-4 border'>
            <input
                type="text"
                placeholder="Type Here..."
                className="border"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <p className="">Typed: {text}</p>
        </div>
    );
};

export default InputZComp;
