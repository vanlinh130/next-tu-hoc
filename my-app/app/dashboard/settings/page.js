"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import PostList from "../../blog/PostList"

export default function Page() {
    const router = useRouter()

    const posts = [
        {
            id: 1,
            name: "Van Linh",
            slug: "van-linh"
        },
        {
            id: 2,
            name: "Chau Long",
            slug: "chau-long"
        }
    ]

    return (
        <div>
            <h1>Settings page</h1>
            <div className="flex flex-col gap-3 p-3 ml-2">
                <Link href="/dashboard" className="text-red-400">Link : Dashboard</Link>
                <div>
                    <button type="button" onClick={() => router.push('/dashboard')}>
                        Router: Dashboard
                    </button>
                </div>
                <PostList posts={posts}/>
            </div>
        </div>
    );
  }
  