"use client";
import Input from "@/ui/input/input";

const AdminHome = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
    // fonskiyon ile yollanıpdaha sonra dönen ifadeye göre toast basılacak
    // ayrıca sadece buton için özel bir component yazılacak
  };
  return (
    <div className="flex items-center justify-center h-screen p-4 bg-admin-primary-light/50">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-10 max-w-md w-full px-6 py-12 rounded-xl bg-white shadow-lg shadow-purple/20">
        <h1 className="text-[22px] text-center font-medium text-blueFacebook -mt-4">Sign in</h1>
        <div className="flex flex-col gap-8">
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              capitalize={false}
              inputClassName="border border-admin-grey-500/20 border-admin-primary-200/70 hover:shadow-purple/20"
            />
          </div>
          <div>
            <Input
              label="Password"
              name="password"
              type="password"
              capitalize={false}
              inputClassName="border border-admin-grey-500/20 border-admin-primary-200/70 hover:shadow-purple/20"
            />
          </div>
        </div>
        <button className="text-xs text-white font-semibold w-full py-3 rounded-lg bg-gradient-to-r from-admin-primary-200  to-admin-primary-dark hover:scale-[1.01] transition-all shadow-md shadow-admin-primary-200">
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default AdminHome;
