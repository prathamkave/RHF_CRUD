import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, addUsers, users }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      imageUrl: "",
      name: "",
      role: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
      let arr = [...users, { ...data, id: Date.now() }];
    
      addUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
   
    reset();
   
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md p-6 bg-[#24221B] rounded-2xl shadow-2xl border border-[#E4DFD8]/15">
        <button
          type="button"
          onClick={() => setToggle(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-5 text-center text-[#E4DFD8] tracking-tight">
          Profile Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#E4DFD8] mb-1 uppercase tracking-wider">
              Image URL *
            </label>
            <input
              type="url"
              {...register("imageUrl", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                  message: "Please enter a valid image URL",
                },
              })}
              className={`w-full px-3 py-2 bg-[#24221B] border rounded-lg text-sm text-[#E4DFD8] placeholder-[#E4DFD8]/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.imageUrl
                  ? "border-red-400 focus:ring-red-400/20"
                  : "border-[#E4DFD8]/20 focus:border-[#F2D04E] focus:ring-[#F2D04E]/20"
              }`}
              placeholder="https://example.com/image.jpg"
            />
            {errors.imageUrl && (
              <p className="mt-1 text-xs font-semibold text-red-400">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#E4DFD8] mb-1 uppercase tracking-wider">
              User Name *
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-3 py-2 bg-[#24221B] border rounded-lg text-sm text-[#E4DFD8] placeholder-[#E4DFD8]/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "border-red-400 focus:ring-red-400/20"
                  : "border-[#E4DFD8]/20 focus:border-[#F2D04E] focus:ring-[#F2D04E]/20"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs font-semibold text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#E4DFD8] mb-1 uppercase tracking-wider">
              Role / Designation *
            </label>
            <input
              type="text"
              {...register("role", { required: "Role is required" })}
              className={`w-full px-3 py-2 bg-[#24221B] border rounded-lg text-sm text-[#E4DFD8] placeholder-[#E4DFD8]/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.role
                  ? "border-red-400 focus:ring-red-400/20"
                  : "border-[#E4DFD8]/20 focus:border-[#F2D04E] focus:ring-[#F2D04E]/20"
              }`}
              placeholder="Software Engineer"
            />
            {errors.role && (
              <p className="mt-1 text-xs font-semibold text-red-400">
                {errors.role.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#E4DFD8] mb-1 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-3 py-2 bg-[#24221B] border rounded-lg text-sm text-[#E4DFD8] placeholder-[#E4DFD8]/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email
                  ? "border-red-400 focus:ring-red-400/20"
                  : "border-[#E4DFD8]/20 focus:border-[#F2D04E] focus:ring-[#F2D04E]/20"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-xs font-semibold text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#E4DFD8] mb-1 uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Must be at least 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "At most 10 digits are allowed",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
              className={`w-full px-3 py-2 bg-[#24221B] border rounded-lg text-sm text-[#E4DFD8] placeholder-[#E4DFD8]/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-400/20"
                  : "border-[#E4DFD8]/20 focus:border-[#F2D04E] focus:ring-[#F2D04E]/20"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-xs font-semibold text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 mt-4 text-[#24221B] text-base font-bold tracking-wide rounded-lg bg-[#F2D04E] hover:bg-[#E5C138] focus:outline-none focus:ring-2 focus:ring-[#F2D04E]/40 transition-all cursor-pointer duration-300 active:scale-[0.98]"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
