// app/page.tsx or wherever you're using this

type BlogPost = {
    id: number;
    title: string;
};

export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog');
    const posts: BlogPost[] = await data.json();

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
