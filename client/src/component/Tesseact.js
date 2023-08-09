// import React, { useEffect, useState } from 'react';
// import { createWorker } from 'tesseract.js';
// import './App.css';
//
// function Tesseract() {
//     const worker = createWorker({
//         logger: m => console.log(m),
//     });
//
//     const [imageURL, setImageURL] = useState('');
//     const [ocr, setOcr] = useState('Recognizing...');
//
//     const doOCR = async () => {
//         await worker.load();
//         await worker.loadLanguage('eng');
//         await worker.initialize('eng');
//         const { data: { text } } = await worker.recognize(imageURL);
//         setOcr(text);
//     };
//
//     const handleImageChange = (event) => {
//         setImageURL(URL.createObjectURL(event.target.files[0]));
//     };
//
//     useEffect(() => {
//         doOCR();
//     }, [imageURL]);
//
//     return (
//         <div className="App">
//             <form>
//                 <input type="file" accept="image/*" onChange={handleImageChange} />
//             </form>
//             <div>
//                 <img src={imageURL} alt="Selected" style={{ maxWidth: '100%' }} />
//             </div>
//             <p>{ocr}</p>
//         </div>
//     );
// }
//
// export default App;