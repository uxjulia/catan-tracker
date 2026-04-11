import { useRef } from "react";

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (index: number, value: string) => void;
}

const InputField = ({ id, label, value, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.select();
  };

  return (
    <div className="mt-3 mb-4">
      <label
        htmlFor={`input-${id}`}
        className="block text-xs text-gray-500 mb-1"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={`input-${id}`}
        type="text"
        value={value}
        onFocus={handleFocus}
        onChange={(e) => onChange(Number(id), e.target.value)}
        className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
};

export default InputField;
