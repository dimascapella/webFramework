import React from 'react';

const display = () => {
    return (
        <div className="tugasStateless">
            <h2 className="text-center">Form Login Stateless</h2>
            <div className="box">
                <h1 className="text-center">Tugas Pertemuan Ketiga</h1>
                <div className="username mt-6">
                    <h3 className="mt-6 d-inline ml-3">Username</h3>
                    <input type="text" className="d-inline ml-4 pl-2" placeholder="Masukkan Username" />
                </div>
                <div className="password mt-2">
                    <h3 className="mt-6 d-inline ml-3 pt-2">Password</h3>
                    <input type="password" className="d-inline ml-47 pl-2" placeholder="Masukkan Password" />
                </div>
                <button className="mt-2 btn-green-center-full">Login</button>
                <div className="mt-2 text-center">
                    <input type="checkbox"></input>
                    <label> Remember Me</label>
                </div>
                <button className="h-40 bg-red b-none text-white px-2 d-flex m-0-auto mt-2">Cancel</button>
            </div>
        </div>
    );
};

export default display;