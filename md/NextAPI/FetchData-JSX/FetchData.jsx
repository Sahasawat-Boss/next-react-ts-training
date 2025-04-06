export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

// export default async function Page() {
//     const data = await fetch('https://api.vercel.app/blog')
//     const posts = await data.json()
//     return (
//         <div>
//             {posts.map((post) => (
//                 <div key={post.id} className="border">
//                     <div>{post.title}</div>
//                     <div>{post.content}</div>
//                     <span>{post.author} | </span>
//                     <span>{post.date} | </span>
//                     <span>{post.category} | </span>
//                     <br />
//                     <br />
//                 </div>
//             ))}
//         </div>
//     )
// }