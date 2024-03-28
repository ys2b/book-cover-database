import React, { useState } from 'react';

export default function Home() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
        alert('Please select a file first.');
        return;
        }

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
        });

        if (response.ok) {
            alert('Uploaded successfully and data added to Notion!');
        } else {
            alert('Failed to upload. Try again.');
        }
        } catch (error) {
            console.error('Error uploading the file:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F4F8]">
        <h1 className="text-2xl font-bold font-roboto text-[#334155] mb-8">
            Book Cover Scanner
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <p className="font-roboto text-[#64748B] mb-4">
            Upload a photo of a book cover to start
            </p>
            <label
            htmlFor="upload-photo"
            className="cursor-pointer bg-[#2563EB] text-white font-roboto p-2 rounded-lg inline-flex items-center justify-center gap-2"
            >
            Upload Photo 📷
            </label>
            <input
            id="upload-photo"
            name="photo"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            />
            <button
            className="mt-4 bg-[#10B981] text-white font-roboto p-2 rounded-lg"
            onClick={handleUpload}
            >
            Scan and Upload to Notion
            </button>
        </div>
    </div>
    );
}