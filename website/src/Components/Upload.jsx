import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
    const [images, setImages] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");

    // GitHub Repo Config
    const repoOwner = process.env.REACT_APP_REPO_OWNER;
    const repoName = process.env.REACT_APP_REPO_NAME;
    const folderPath = process.env.REACT_APP_FILE_PATH;
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

    console.log("🛠️ Debug: GitHub Config");
    console.log("Repo Owner:", repoOwner);
    console.log("Repo Name:", repoName);
    console.log("Folder Path:", folderPath);
    console.log("GitHub Token Loaded:", GITHUB_TOKEN ? "✅ Yes" : "❌ No");

    const handleMultipleImageUpload = async (event) => {
        const files = event.target.files;
        if (!files.length) return;

        setUploadStatus("Uploading images...");
        let uploadedImages = [];

        for (let file of files) {
            const fileName = `${Date.now()}_${file.name}`;
            const filePath = `${folderPath}/${fileName}`;
            const fileBase64 = await convertFileToBase64(file);

            try {
                const response = await axios.put(
                    `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
                    {
                        message: `Uploaded image: ${fileName}`,
                        content: fileBase64,
                        branch: "main",
                    },
                    {
                        headers: {
                            Authorization: `token ${GITHUB_TOKEN}`,
                            Accept: "application/vnd.github.v3+json",
                        },
                    }
                );

                if (response.status === 201) {
                    console.log(`✅ Successfully uploaded: ${fileName}`);
                    uploadedImages.push({
                        name: fileName,
                        url: `data:image/jpeg;base64,${fileBase64}` // Display uploaded images
                    });
                }
            } catch (error) {
                console.error(`❌ Error uploading ${file.name}:`, error.response?.data || error.message);
            }
        }

        setImages(uploadedImages); // Show only uploaded images
        setUploadStatus("✅ All images uploaded successfully!");
    };

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(",")[1]); // Remove Base64 prefix
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div>
            <h2>Upload Images to GitHub</h2>
            <input type="file" accept="image/*" multiple onChange={handleMultipleImageUpload} />
            {uploadStatus && <p>{uploadStatus}</p>}

            <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((img, index) => (
                    <img key={index} src={img.url} alt={`img-${index}`} className="w-full h-auto" />
                ))}
            </div>
        </div>
    );
}
