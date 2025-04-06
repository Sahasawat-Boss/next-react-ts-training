// app/page.tsx

type BlogPost = {
    id: number;
    title: string;
};

export default async function Page() {
    let posts: BlogPost[] = [];

    try {
        const res = await fetch('https://api.vercel.app/blog');

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        posts = await res.json();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Optional: show fallback message or log error
    }

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

            {posts.length === 0 ? (
                <p className="text-red-500">No posts found or failed to load.</p>
            ) : (
                <ul className="list-disc pl-6 space-y-1">
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}
