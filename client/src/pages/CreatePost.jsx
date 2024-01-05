import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        prompt: "",
        photo: "",
    });
    const [generatingImg, setGeneratingImg] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {};
    const handleChange = () => {};
    const handleSurpriceMe = () => {};

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] tex-[32px]">
                    Create
                </h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
                    Create imaginative and visually stunning images through
                    DALL-E AI and share them with the community.
                </p>
            </div>
            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <FormField
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.prompt}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="A plush toy robot sitting against a yellow wall"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpiceMe
                        handleSurpriceMe={handleSurpriceMe}
                    />
                    <div
                        className="relative bg-gray-50 
                    border border-gray-300 
                    text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 
                    w-64 p-3 h-64 flex justify-center items-center
                    "
                    >
                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.prompt}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-9/12 h-9/12 opacity-40 object-contain"
                            />
                        )}

                        {generatingImg && (
                            <div
                                className="absolute inset-0 
                                z-0 flex justify-center 
                                items-center bg-[rgba(0,0,0,0.5)] rounfed-lg"
                            >
                                <Loader />
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CreatePost;