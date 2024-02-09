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
        <div className='font-inter'>
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
            <div className='max-w-6xl mx-auto font-inter p-2'>
                <div className=' bg-gray-400 border-gray-300 border-2 p-2 bg-opacity-15'>
                    <div className=''>
                        <h2 className='text-3xl text-[#144248] font-bold'>Problem Summary</h2>
                        <p className='text-2xl'>You want to make sure your users' passwords are sufficiently strong in order to prevent malicious attacks.</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='text-[#144248] font-bold text-3xl'>Example</h2>
                        <img className='flex justify-start items-center text-center mt-4' src="https://i.ibb.co/ZG3Hkcp/Screenshot-2024-02-09-090857.png" alt="" />
                        <h2 className='text-[#144248] text-3xl font-bold'>Usage</h2>
                    </div>
                    <ol className='text-2xl ml-[2rem] mt-2 list-decimal'>
                        <li className='mb-2'>Use when you want your users to choose passwords for their user accounts that are hard to break or guess by either human or computerized help.</li>
                        <li className='mb-2'>Use when you want to increase the complexity of your users’ passwords and raise the barrier for attackers tampering with your system.</li>
                        <li className='mb-2'>Use when you want to be sure that your users know what a good password is and that their chosen password follows such guidelines.</li>
                    </ol>
                </div>
                <div className='max-w-6xl font-inter text-3xl mt-2 font-bold text-[#144248]'>
                    <h2>More Examples</h2>
                    <div className='lg:flex md:flex gap-2'>
                        <img className='lg:w-[15rem] h-[12rem]' src="https://i.ibb.co/ZG3Hkcp/Screenshot-2024-02-09-090857.png" alt="" />
                        <img className='lg:w-[15rem] h-[12rem]' src="https://i.ibb.co/ZG3Hkcp/Screenshot-2024-02-09-090857.png" alt="" />
                        <img className='lg:w-[15rem] h-[12rem]' src="https://i.ibb.co/ZG3Hkcp/Screenshot-2024-02-09-090857.png" alt="" />
                        <img className='lg:w-[15rem] h-[12rem]' src="https://i.ibb.co/ZG3Hkcp/Screenshot-2024-02-09-090857.png" alt="" />
                    </div>
                </div>

                <div className='max-w-4xl mx-auto mt-6'>
                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>Solution</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl'>A password’s strength is
                            measured according to predefined rules and is displayed using a
                            horizontal scale next to the input field. If the password is weak
                            then only a small portion of the horizontal bar is highlighted. The
                            greater the strength of the password the more the horizontal bar is
                            highlighted.

                            The password strength is also appropriately indicated by coloring
                            the bar
                            in a color associative with good or bad: Green indicating a strong
                            password and red indicating a weak password.
                        </p>

                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            The password strength is also appropriately indicated by
                            coloring the bar in a color associative with good or
                            bad: Green indicating a strong password and red indicating
                            a weak password.
                        </p>

                    </div>

                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>How strong a password?</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            The definition of a strong password can be intensely argued. A
                            forced complex password at first glance only spells increased

                            security, but forcing too complex and rigid rules on password
                            can have the opposite effect. As passwords are forced to be complex,
                            they also become increasingly harder to remember by the user. This
                            occasionally leads to a self-destruction of the increased security,
                            as some users simply write it down on a small sticky note and paste
                            it up on their screen in order to remember their new complex
                            password. This is especially a problem in places with the policy
                            of forced password renewal every 3 months.
                        </p>

                    </div>

                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>What is a strong password?</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            With the above mentioned in mind, I should stress that a sufficiently
                            strong password does not necessarily need to fulfill all of the rules below,
                            but merely a few will do. Consider the following rules, for each rules
                            followed add a point to the passwords strength level
                            (so that 0 points is the weakest, and 5 is the strongest).
                            UI-patterns.com defines a strong password when it…:

                            <ul className='list-disc ml-10 mt-3 mb-3'>
                                <li>
                                    <li>Has more than 8 characters</li>
                                    <li>Contains both lowercase and uppercase letters</li>
                                    <li>Contains at least one numerical character</li>
                                    <li>Contains special characters</li>
                                    <li>Has more than 12 characters</li>
                                </li>
                            </ul>
                        </p>

                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            This would result in 6 levels of password strength depending on how
                            many of the above mentioned criteria are being met.
                        </p>

                    </div>

                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>Dictionary attacks</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            While the above mentioned password check can easily be done
                            using only client-side javascript, it does not prevent against
                            dictionary attacks. To ease the memorization of passwords,
                            people tend to use real words as passwords and merely
                            substitute characters with numbers or special characters.
                            An example of such a password could be “P@ssw0rd”, which
                            really isn’t a strong password. Modern password breaking
                            software is fairly good at guessing such number/letter
                            substitutions. To check against such strength, you would
                            need to do ajax calls that would check with your own
                            dictionary if the password was strong or not.
                        </p>

                    </div>
                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>Choosing an appropriate level of password strength</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl'>
                            You need to determine the password strength and complexity
                            according to what you want to protect. You need to draw the
                            line somewhere. For 99% of the content out there it can
                            easily be argued that merely the first 2 or 3 rules
                            mentioned above will be sufficient.
                        </p>

                    </div>
                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>General guidelines on choosing a password</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl ml-9'>
                            <ul className="list-disc">
                                <li>Use a password of a seemingly random selection of letters and numbers</li>
                                <li>Use a password that you can type without you having to look at the keyboard (decreases possibility of people stealing your password)</li>
                                <li>Change your password regularly</li>
                                <li>Do not use your network ID in any form (capitalized, reversed, doubled, etc.)</li>
                                <li>Do not use your first, middle or last name or anyone else’s in any form.</li>
                                <li>Do not use your initials or any nicknames you or somebody else might have.</li>
                                <li>Do not use a word contained in any dictionary (English or foreign), spelling list, abbreviation list, etc.</li>
                                <li>Do not use information that people can easily obtain about you (license plate, pet name, date of birth, telephone numbers)</li>
                                <li>Do not use password of all alphabetical characters or only numeric characters – mix them up.</li>
                                <li>Do not use keyboard sequences (for instance qwerty or asdf)</li>
                            </ul>
                        </p>

                    </div>
                    <div className='mt-5 '>
                        <h2 className='text-[#144248] font-bold text-3xl'>Rationale</h2>
                        <p className='mt-4 lg:w-[50rem] text-xl '>
                            By showing a
                            password strength meter beside the password field,
                            the user is forced to consider using a password with
                            an appropriate strength. By putting a minimum level
                            of password strength you can even use the password
                            strength meter to force a heightened security to your website.

                            Using a password strength indicator on the website, adds
                            another level of security is added to the site. This not
                            only makes the current users of the site feel more secure, but
                            potential clients might use this as a requisite when deciding to
                            conduct business with a company.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordStrengthChecker;
