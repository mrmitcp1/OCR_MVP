import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function ListTrip() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/trips").then((response) => {
            setList(response.data.trips);

        });
    }, []);
    const deleteTrip = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa!")) {
            axios.delete(`http://localhost:4000/api/trips/${id}`).then(() => {
                axios.get("http://localhost:4000/api/trips").then((response) => {
                    setList(response.data.trips);
                });
            });
        }
    };
    return (
        <div className="mx-3 shadow p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">List Trip</h1>
            <div className='d-flex justify-content-center'>
                <button
                    type="button"
                    className="btn btn-outline-success mb-3  "
                    onClick={() => {
                        navigate("/add");
                    }}
                >
                    Add Trip
                </button>
            </div>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr className="text-center">
                    <th scope="col">STT</th>
                    <th scope="col">date</th>
                    <th scope="col">pickUp</th>
                    <th scope="col">dropOf</th>
                    <th scope="col">driver</th>
                    <th scope="col">firstKm</th>
                    <th scope="col">lastKm</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index} className="text-center">
                        <td>{index}</td>
                        {/*<td>*/}
                        {/*    <Link to={`/detail/${item.id}`} className="text-decoration-none">*/}
                        {/*        <span className="">{item.date}</span>*/}
                        {/*    </Link>*/}
                        {/*</td>*/}
                        <td>{item.date}</td>
                        <td>{item.pickUp}</td>
                        <td>{item.dropOf}</td>
                        <td>{item.driver}</td>
                        <td>{item.firstKm}</td>
                        <td>{item.lastKm}</td>

                        {/*<td className="col-8">{item.description}</td>*/}
                        <td>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger me-3"
                                    onClick={() => {
                                        deleteTrip(`${item.id}`);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => {
                                        navigate(`/api/trips/${item.id}`);
                                    }}
                                >
                                    Update
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}