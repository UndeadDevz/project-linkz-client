export const SizeComponent = ({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  onChange;
  return (
    <span className='flex gap-2'>
      <span
        className={` cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === "0.75rem" && "bg-purple-700 text-white"
        }`}
        onClick={() => {
          onChange("0.75rem");
        }}
      >
        S
      </span>
      <span
        className={` cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === "1rem" && "bg-purple-700 text-white"
        }`}
        onClick={() => {
          onChange("1rem");
        }}
      >
        M
      </span>
      <span
        className={` cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === "1.5rem" && "bg-purple-700 text-white"
        }`}
        onClick={() => {
          onChange("1.5rem");
        }}
      >
        L
      </span>
      <span
        className={` cursor-pointer py-1 rounded-md text-gray-500 text-center hover:bg-white bg-gray-300 w-8 ${
          value === "2rem" && "bg-purple-700 text-white"
        }`}
        onClick={() => {
          onChange("2rem");
        }}
      >
        XL
      </span>
    </span>
  );
};
