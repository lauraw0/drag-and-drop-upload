import React from 'react'
import { useCallback, useState } from 'react'
import cuid from "cuid";
import ImageGrid from "./ImageGrid";
// import './box.css';
// import Dropzone from 'react-dropzone'
import Dropzone from "./Dropzone";



// function uploadFile(file) {
//   fetch('https://path/to/api', {
//     // content-type header should not be specified!
//     method: 'POST',
//     body: file,
//   })
//     .then(response => response.json())
//     .then(success => {
//       // Do something with the successful response
//     })
//     .catch(error => console.log(error)
//     );
// }

// function uploadFile(file) {
//   fetch('https://path/to/api', {
//     // content-type header should not be specified!
//     method: 'GET',
//     body: file,
//   })
//     .then(response => response.json())
//     .then(success => {
//       // Do something with the successful response
//     })
//     .catch(error => console.log(error)
//     );
// }

function App() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    // <div className="box">
    //   <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
    //     {({ getRootProps, getInputProps }) => (
    //       <section>
    //         <div {...getRootProps()}>
    //           <input {...getInputProps()} />
    //           <p>Drag 'n' drop some files here, or click to select files</p>
    //         </div>
    //       </section>
    //     )}
    //   </Dropzone>
    // </div>
    <div>
      <Dropzone onDrop={onDrop}/>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
