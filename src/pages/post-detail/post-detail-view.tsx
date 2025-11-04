'use client';

import { mockPosts } from "@/src/data/mock-posts";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

type Props = {
    postId: number;
}

function PostDetailView({ postId }: Props) {
    const router = useRouter();

    const post = useMemo(() => mockPosts.find((post) => post.id == postId), [postId])

    const handleBackButtonClick = useCallback((ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        router.push('/posts');
    }, [router]);

    return <div className="flex min-h-screen items-start py-10 gap-2 justify-center">
        <div className="flex flex-col items-start gap-4">
            <button className="p-2 rounded-md bg-gray-100 hover:cursor-pointer hover:bg-gray-200" onClick={handleBackButtonClick} >← Back</button>
            <main className="post max-w-3xl w-full">
                <h3 className="post-title text-4xl font-bold mb-8">{post?.title}</h3>
                <h4 className="post-subtitle text-2xl font-semibold mb-4 text-gray-600">{post?.subtitle}</h4>
                <p className="post-content">{post?.content}</p>
            </main>
        </div>
    </div>
}

export default PostDetailView;