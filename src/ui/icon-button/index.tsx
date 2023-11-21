import Link from "next/link";

type IconButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  label?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ children, href, label, className, disabled, type = "submit", ...props }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          {...props}
          className={`min-w-[34px] min-h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main ${className}`}
        >
          {children}
          {label && <span className="px-2">{label}</span>}
        </Link>
      ) : (
        <button
          {...props}
          disabled={disabled}
          type={type}
          className={`min-w-[34px] min-h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main ${className} ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }}`}
        >
          {children}
          {label && <span className="px-2">{label}</span>}
        </button>
      )}
    </>
  );
};

export default IconButton;
