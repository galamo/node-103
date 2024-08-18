import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerApi } from './service';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Skeleton } from '@mui/material';


const RegistrationForm = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState({ isError: false, errorMessage: "" });
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState({ isError: false, errorMessage: "" });
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
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


    function isDisabled(): boolean {
        if (!username || !fullName) {
            return true
        }
        if (fullNameError.isError || usernameError.isError) {
            return true
        }
        return false;
    }

    function isFullNameValid() {
        if (!fullName) {
            setFullNameError({ isError: true, errorMessage: "missing full name" })
            return;
        } else if (typeof fullName === 'string' && fullName.length < 3) {
            setFullNameError({ isError: true, errorMessage: "full name too short" })
            return;
        } else {
            setFullNameError({ isError: false, errorMessage: "" })
            return;
        }
    }

    function isUsernameValid() {
        if (!username) {
            setUsernameError({ isError: true, errorMessage: "missing username" })
            return;
        } else if (typeof username === 'string' && !username.includes("@")) {
            setUsernameError({ isError: true, errorMessage: "username is not email" })
            return;
        } else {
            setUsernameError({ isError: false, errorMessage: "" })
            return;
        }
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TextField onBlur={isFullNameValid} helperText={fullNameError.errorMessage} error={fullNameError.isError} label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <TextField onBlur={isUsernameValid} helperText={usernameError.errorMessage} error={usernameError.isError} label="Username (Email)" value={username} onChange={(e) => setUsername(e.target.value)} type="email" />
            {/* <Skeleton variant="rectangular" width={500} height={50} /> */}
            <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <TextField label="Year of Birth" value={yearOfBirth} onChange={(e) => setYearOfBirth(Number(e.target.value))} type="number" />

            {isLoading ? <LoadingLogin /> : <Button disabled={isDisabled()} variant="contained" onClick={handleSubmit} color="primary" type="button">Submit</Button>}
        </form>
    );
};

function LoadingLogin() {
    return <span> <CircularProgress /> Please wait ...  </span>
}

export default RegistrationForm;