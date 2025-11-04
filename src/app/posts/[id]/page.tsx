import PostDetailView from "@/src/pages/post-detail/post-detail-view";
type Parameters = {
    id: string;
}

type Props = {
    params: Promise<Parameters>;
}

export default async function PostDetailPage({ params }: Props) {
    const { id } = await params;

    return <PostDetailView postId={Number(id)} />;
}