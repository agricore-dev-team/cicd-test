export default function Chip({ label }: { label: string }) {
    return (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-300 text-gray-800">
            {label}
        </div>
    );
}
