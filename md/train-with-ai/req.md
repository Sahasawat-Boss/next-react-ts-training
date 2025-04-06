# Requirements:

1. Set up a Next.js app from scratch
Create the project using `npx create-next-app@latest`

Clean up boilerplate code

2. Pages
Create two pages:

/ (Homepage): Display a list of blog posts

/post/[id]: Dynamic route to display a single post’s details

3. Data
Use a mock array of blog posts (no API or internet allowed):
```
    // data/posts.js
    export const posts = [
    { id: '1', title: 'First Post', content: 'This is the first blog post.' },
    { id: '2', title: 'Second Post', content: 'Another blog post content here.' },
    { id: '3', title: 'Third Post', content: 'Yet another exciting post!' },
    ];

```
4. Home Page (/)
Display the post titles as links

Use the Link component to route to /post/[id]

5. Post Page (/post/[id])
Use getStaticPaths and getStaticProps to fetch the correct post by ID

Show the post’s title and content