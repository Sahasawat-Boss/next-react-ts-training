// src/app/posts/page.jsx

const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' }
]

export default async function PostsPage() {
    // Simulate fetching static data
    // (if you were using an API, you'd fetch it here)

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-4">Posts </h1>
            <ul className="list-disc pl-6 space-y-2">
                {posts.map((data) => (
                    <li key={data.id}>
                        {data.id}: {data.title}
                    </li>
                ))}
            </ul>
        </main>
    )
}
