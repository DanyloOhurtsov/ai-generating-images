import React from "react";

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpiceMe,
    handleSurpriceMe,
}) => {
    return (
        <div>
            <div className="flex items-center gap-2mb-2">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-950"
                >
                    {labelName}
                </label>
                {isSurpiceMe && (
                    <button
                        type="button"
                        onClick={handleSurpriceMe}
                        className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black ml-2"
                    >
                        Surprise me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg 
                focus:ring-[#4649ff] focus:border-[#4649ff] 
                outline-none block w-full p-3 mt-2"
            />
        </div>
    );
};

export default FormField;
