import React from 'react';

const SelectableButton = ({ label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`border-2 border-orange-600 text-black p-8 pt-2 pb-2 text-2xl rounded-full w-96" ${isSelected ? 'transition-colors duration-300 bg-orange-600 text-white' : ''
                }`}
        >
            {isSelected ? (
                <span className="flex items-center">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                    {label}
                </span>
            ) : (
                <span>{label}</span>
            )}
        </button>
    );
};

export default SelectableButton;