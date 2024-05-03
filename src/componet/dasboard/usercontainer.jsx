import React, { useEffect } from 'react';

const UserContainer = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in localStorage.');
            return;
        }

        try {
            const decodedToken = parseJwt(token);

            if (!decodedToken || !decodedToken.user) {
                console.error('Invalid token:', token);
                return;
            }

            const userData = decodedToken.user;

            const firstName = userData.name.split(' ')[0];

            document.getElementById('userName').textContent = userData.name;
            document.getElementById('userEmail').textContent = userData.email;
        } catch (error) {
            console.error('Error parsing token:', error);
        }
    }, []);

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    return (
        <main className="main-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.170784788214!2d30.05886637225733!3d-1.9402781040833565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19f2a0e45aa9e7b1%3A0x8ea7e276804f91ac!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1677161347101!5m2!1sen!2sus" allowFullScreen title="Google Maps"></iframe>
            <h2>User Information</h2>
            <table id="userData" border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td id="userName" contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td id="userEmail" contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td id="userPassword" contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Confirm Password</th>
                        <td id="userConfirmPassword" contentEditable="true"></td>
                    </tr>
                </tbody>
            </table>
            <button id="saveChangesBtn">Save Changes</button>
        </main>
    );
};

export default UserContainer;
