import { MouseEvent } from 'react';

export function ToggleSwitch({
  label,
  onChange,
  checked = false,
  name,
}: {
  label?: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}) {
  const toggle = (): void => onChange(!checked);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    toggle();
  };

  return (
    <>
      <button className="relative inline-flex items-center cursor-pointer" onClick={handleClick}>
        <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-400 shadow-sm rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        {label && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>}
      </button>
    </>
  );
}
