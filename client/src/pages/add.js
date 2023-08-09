import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {createWorker} from "tesseract.js";


export default function AddTrip() {
    const navigate = useNavigate();
    const [trip, setTrip] = useState({
        id: "",
        date: "",
        pickUp: "",
        dropOf: '',
        driver: '',
        firstKm: 'Recognizing first Km...',
        lastKm: 'Recognizing last Km...',
    });
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTrip({ ...trip, [name]: value });
    };

    const [imageFirstKmURL, setImageFirstKmURL] = useState('');
    const [imageLastKmURL, setImageLastKmURL] = useState('');

    const handleFirstKmImageChange = (event) => {
        setImageFirstKmURL(URL.createObjectURL(event.target.files[0]));
    };

    const handleLastKmImageChange = (event) => {
        setImageLastKmURL(URL.createObjectURL(event.target.files[0]));
    };

    const doOCR = async()=> {
        const worker = createWorker();

        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        await worker.setParameters({
            tessedit_char_whitelist: '0123456789'
        })
        if (imageFirstKmURL) {
            const { data: { text } } = await worker.recognize(imageFirstKmURL);
            setTrip({ ...trip, firstKm: text})
        }
        if (imageLastKmURL) {
            const { data: { text } } = await worker.recognize(imageFirstKmURL);
            setTrip({ ...trip, lastKm: text})
        }
    }
    useEffect( () => {
       doOCR()
    }, [imageFirstKmURL, imageLastKmURL]);
    return (
        <div className="container w-25 shadow-sm p-3 mb-5  rounded mt-5 bg-secondary">
            <h1 className='text-light'>Add Trip</h1>
            <input
                type="text"
                placeholder="Enter date"
                name="date"
                value={trip.date}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Enter pickUp"
                name="pickUp"
                value={trip.pickUp}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Enter dropOf"
                name="dropOf"
                value={trip.dropOf}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Enter driver"
                name="driver"
                value={trip.driver}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <form>
                <div className="App">
                    <form>
                        <input type="file" name="imageFirstKmURL" accept="image/*" onChange={handleFirstKmImageChange} />
                    </form>
                    {imageFirstKmURL && <div>
                        <img src={imageFirstKmURL} alt="Selected" style={{ maxWidth: '100%' }} />
                    </div>}
                    <input
                        type="text"
                        placeholder="Enter driver"
                        name="firstKm"
                        value={trip.firstKm}
                        className="form-control"
                        onChange={onChangeHandled}
                    />
                </div>
                <br />
            </form>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Enter lastKm"*/}
            {/*    name="lastKm"*/}
            {/*    value={ocr}*/}
            {/*    className="form-control"*/}
            {/*    onChange={onChangeHandled}*/}
            {/*/>*/}
            <br />
            <form>
                <div className="App">
                    <form>
                        <input type="file" name="imageLastKmURL" accept="image/*" onChange={handleLastKmImageChange} />
                    </form>
                    {imageLastKmURL && <div>
                        <img src={imageLastKmURL} alt="Selected" style={{ maxWidth: '100%' }} />
                    </div>}
                    <input
                        type="text"
                        placeholder="Enter driver"
                        name="lastKm"
                        value={trip.lastKm}
                        className="form-control"
                        onChange={onChangeHandled}
                    />
                </div>
                <br />
            </form>

            <button
                type="button"
                className="btn btn-outline-warning w-100"
                onClick={async () => {


                    axios.post("http://localhost:4000/api/trips", trip);
                    navigate("/");
                }}
            >
                Add
            </button>
        </div>
    );
}