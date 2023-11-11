type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="w-[34px] h-[34px] duration-300 flex items-center justify-center cursor-pointer rounded-lg text-admin-secondary-dark hover:text-admin-secondary-light bg-admin-secondary-light hover:bg-admin-secondary-main">
      {children}
    </div>
  );
};

export default IconButton;
