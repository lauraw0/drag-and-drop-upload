import React from 'react'
import { useEffect, useState } from 'react'
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
      <Dropzone />
    </div>
  );
}

export default App;
