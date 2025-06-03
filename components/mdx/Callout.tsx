type Props = {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
};

export const Callout = ({ children, type = "info" }: Props) => {
  const colors = {
    info: "bg-blue-100 border-blue-500 text-blue-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    error: "bg-red-100 border-red-500 text-red-800",
    success: "bg-green-100 border-green-500 text-green-800",
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded ${colors[type]}`}>
      {children}
    </div>
  );
};
