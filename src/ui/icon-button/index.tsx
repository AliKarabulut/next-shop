import Link from "next/link";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ children, href, className, disabled, ...props }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          {...props}
          className={`w-[34px] h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          {...props}
          disabled={disabled}
          className={`w-[34px] h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default IconButton;
