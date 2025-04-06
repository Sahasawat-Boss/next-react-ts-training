//  Just async await and Add Type Delaration
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

// Just async await

// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog');
//   const posts = await data.json();

//   return (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

//------------------------------

