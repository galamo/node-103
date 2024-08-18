import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerApi } from './service';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Skeleton } from '@mui/material';


const RegistrationForm = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [fullName, setFullName] = useState('gal amouyal');
    const [username, setUsername] = useState('galamo@gmail.com');
    const [phone, setPhone] = useState('054213254');
    const [password, setPassword] = useState('!aaA112ered2');
    const [yearOfBirth, setYearOfBirth] = useState(1988);

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const result = await registerApi({ fullName, userName: username, phone, password, yearOfBirth })
            navigate("/login")
        } catch (error) {
            console.log(error, "error")
            alert(error?.data)
        } finally {
            setIsLoading(false)
        }
        // Handle form submission here, e.g., send data to an API
    };

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TextField error={true} helperText="BAD!!!" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <TextField label="Username (Email)" value={username} onChange={(e) => setUsername(e.target.value)} type="email" />
            {/* <Skeleton variant="rectangular" width={500} height={50} /> */}
            <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <TextField label="Year of Birth" value={yearOfBirth} onChange={(e) => setYearOfBirth(Number(e.target.value))} type="number" />

            {isLoading ? <LoadingLogin /> : <Button variant="contained" onClick={handleSubmit} color="primary" type="button">Submit</Button>}
        </form>
    );
};

function LoadingLogin() {
    return <span> <CircularProgress /> Please wait ...  </span>
}

export default RegistrationForm;