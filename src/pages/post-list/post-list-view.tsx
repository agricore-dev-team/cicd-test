'use client';

import { mockPosts } from "@/src/data/mock-posts";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

function PostListView() {
    const router = useRouter();

    const handlePostClick = useCallback((ev: React.MouseEvent, postId: number) => {
        ev.preventDefault();
        router.push(`/posts/${postId}`);
    }, []);

    return <div className="flex min-h-screen items-start py-10 justify-center">
        <main className="max-w-3xl w-full">
        <h3 className="text-4xl font-bold mb-8">Post List</h3>
        {mockPosts.map((post) => (
            <article key={post.id} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer hover:bg-gray-100 transition-shadow" onClick={(ev) => handlePostClick(ev, post.id)}>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.subtitle}</p>
            </article>
        ))}
        </main>
    </div>
}

export default PostListView;