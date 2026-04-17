import { useState } from "react";

export default function UserProfile () {
    const [user, setUser] = useState({
        name: "Evelyn",
        email: "evelynabushell@gmail.com",
        address:{
            street: "123 Fake Street",
            city: "Seattle",
            country: "USA"
        }
    });

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    function updateAddress(newStreet, newCity, newCountry){
        setUser({
            ...user,
            address: { ...user.address, street: newStreet, city: newCity, country: newCountry}
        });
    };

    return (
        <div>
            <p>
            {user.name}'s email is {user.email}.
            Their address is
            {user.address.city},
            {user.address.country}
            {user.address.street}.
            </p>

            <input
                value = {street}
                onChange={(e) => setStreet(e.target.value)}
            />

            <input
                value = {city}
                onChange={(e) => setCity(e.target.value)}
            />

            <input
                value = {country}
                onChange={(e) => setCountry(e.target.value)}
            />


            <button onClick= {() => updateAddress(street, city, country)}>Change address</button>
        </div>
    );
}