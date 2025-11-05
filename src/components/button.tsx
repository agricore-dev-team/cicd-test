type Props = {
    id?: string;
    text: string;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ id, text, onClick }: Props) {
    return <button id={id} onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">{text}</button>;
}