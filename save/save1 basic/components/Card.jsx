import React from 'react'

const Card = ({ title, description}) => {
    return (
        <main>
            <div className='border w-fit bg-amber-50 p-5'>
                <h2>Card Title: {title}</h2>
                <h3> Card Description: {description}</h3>
            </div>
        </main>
    )
}

// Usage:
// <Card title='Card 1' description='Comp 1 description' />
// <Card title='Card 2' description='Comp 2 description' />

export default Card 