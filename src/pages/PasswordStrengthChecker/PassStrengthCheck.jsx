import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleGenerateClick = () => {
        const newPassword = generatePassword();
        setPassword(newPassword);

        updatePasswordStrength(newPassword);
        setCharacterCount(newPassword.length);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setCharacterCount(newPassword.length);

        updatePasswordStrength(newPassword);
    };

    const updatePasswordStrength = (newPassword) => {
        let newStrength = 'Weak';

        if (newPassword.length >= 12) {
            newStrength = 'Strong';
        } else if (newPassword.length >= 8) {
            newStrength = 'Moderate';
        }

        setStrength(newStrength);
    };

    const generatePassword = () => {
        const length = 12;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJK@$%&8748948LMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
        let newPassword = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }

        return newPassword;
    };

    const getProgressBarColor = () => {
        switch (strength) {
            case 'Weak':
                return 'bg-red-400';
            case 'Moderate':
                return 'bg-yellow-400';
            case 'Strong':
                return 'bg-green-400';
            default:
                return '';
        }
    };

    return (
        <div>
            <div className='bg-[#017E77] lg:text-6xl md:text-6xl text-xl text-center mb-5 p-4 text-[#EEEEEE] font-inter'>
                <h2>How Secure Is Your Password</h2>
            </div>
            <div className='lg:w-[50%] md:w-[50%] m-auto text-2xl'>
                <h2>Take the Password Test</h2>
                <h2 className='text-xl'>Tip: Stronger passwords use different types of characters</h2>
            </div>
            <div className='bg-gray-500 bg-opacity-25 lg:w-[50%] md:w-[50%] font-serif w-full m-auto p-3 mb-6 rounded-md'>
                <div className='flex items-center justify-between'>
                    <div>
                        <input
                            type="text"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password or click generate button"
                            className="lg:w-[37rem] md:w-full w-full p-2 border rounded-l-md"
                        />
                    </div>
                    <div>
                        <button onClick={handleGenerateClick} className='border-2 font-serif hover:bg-green-800 hover:text-white rounded-r-md hover:border-gray-500 border-green-500 p-2 text-green-600 font-bold border-l-0'>Generate</button>
                    </div>
                </div>

                <div className='mb-3'>
                    <p className='text-[12px] font-serif'>Character {characterCount}</p>
                </div>

                {
                    password && (
                        <div className="w-full h-2 bg-gray-300 rounded">
                            <div
                                className={`h-full ${getProgressBarColor()} rounded`}
                                style={{ width: `${strength === 'Weak' ? 25 : strength === 'Moderate' ? 50 : 100}%` }}
                            ></div>
                        </div>
                    )
                }
                {password && <p>Password Strength: {strength}</p>}
            </div>
        </div>
    );
};

export default PasswordStrengthChecker;
