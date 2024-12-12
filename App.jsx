import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:3000";

export default function App() {



    // PUT = UPDATE = GUNCELLEME

    const guncelle = async (id, guncellenmis_user) => {
        await axios.put(`${BASE_URL}/kullanicilarxx/${id}`, guncellenmis_user);


    }


    useEffect(() => {
        guncelle("1", {
            "isimm": "atiba",
            "sifre": "josef",
        });
    }, [])



    return (
        <div>
            BATURAY DUMAN

        </div>


    )
}











