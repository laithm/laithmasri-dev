// components/mdx/YouTubeEmbed.tsx
type Props = {
  id: string;
};

export function YouTubeEmbed({ id }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9 my-6">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
}
