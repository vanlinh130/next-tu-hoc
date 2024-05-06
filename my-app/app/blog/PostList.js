import Link from 'next/link'
 
export default function PostList({ posts }) {
    console.log(posts);
  return (
    <ul>
     <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.name}</Link>
        </li>
      ))}
    </ul>
    </ul>
  )
}