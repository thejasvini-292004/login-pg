function Button({ img, label, className, type }) {
  return (
    <button
      type={type}
      className={`flex items-center rounded py-4 justify-center gap-2 w-full outline-none shadow-md ${className}`}
    >
      {img && <img src={img} className=" w-4 h-4 " alt="image" />}
      {label}
    </button>
  );
}
export default Button;
