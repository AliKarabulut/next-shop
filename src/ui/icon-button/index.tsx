type IconButtonProps = {
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return (
    <div className="w-[34px] h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main">
      {children}
    </div>
  );
};

export default IconButton;
