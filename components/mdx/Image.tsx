import Image from "next/image";

type Props = React.ComponentProps<typeof Image>;

export const CustomImage = (props: Props) => {
  return <Image {...props} className="rounded shadow max-w-full h-auto" />;
};

// Rename to just Image for export
export { CustomImage as Image };
