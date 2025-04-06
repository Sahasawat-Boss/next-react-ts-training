export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog');
    const posts = await data.json();

    return (
        <div className="p-6">
            <a
                href="https://api.vercel.app/blog"
                className="text-blue-400 text-xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                SRC: https://api.vercel.app/blog
            </a>

            <div className="mt-6 space-y-6 max-w-xl mx-auto">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border p-4 rounded shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-2xl font-bold mb-1">{post.title}</h2>
                        <p className="text-gray-600 mb-2">
                            🗓️ {post.date} | ✍️ {post.author} | 🏷️ {post.category}
                        </p>
                        <p className="text-gray-800">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


// id
// title
// content
// author
// date
// category