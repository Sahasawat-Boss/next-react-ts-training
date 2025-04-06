import React from 'react'

const Box = ({content}) => {
    return (
        <main>
            <div className='w-fit border p-2'>
                <h1>Box</h1>
                <p>content: {content}</p>
            </div>
        </main>
    )
}

export default Box