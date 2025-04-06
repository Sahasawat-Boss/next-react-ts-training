type BlogPost = {
    id: number;
    title: string;
    description: string;
    date: string;
};

export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog');
    const posts: BlogPost[] = await data.json();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{post.id}</td>
                            <td className="border px-4 py-2">{post.title}</td>
                            <td className="border px-4 py-2">{post.description}</td>
                            <td className="border px-4 py-2">{post.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
