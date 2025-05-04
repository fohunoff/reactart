export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  let inputClasses = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"

  if (invalid) {
    labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400"
    inputClasses += ' text-red-500 bg-red-100 border-red-300'
  } else {
    inputClasses += ' text-gray-700 bg-stone-300'
  }

    return (
      <p className="paragraph">
        <label className={labelClasses}>{label}</label>
        <input className={inputClasses} {...props} />
      </p>
    )
}