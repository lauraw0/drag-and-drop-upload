//*Dropzone.js*//

import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onDrop, open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDrop,
    });

    const files = acceptedFiles.map((file) => (
        <li key={file.id}>
            {file.path}
        </li>
    ));

    return (
        <div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input className="input-zone" {...getInputProps()} />
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag’n’drop some files here, or click to select files
                    </p>
                )}
                <button type="button" onClick={open} className="btn">
                    Click to select files
                </button>
                {/* <form>
                    <input type="file" />
                </form> */}
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

export default Dropzone;