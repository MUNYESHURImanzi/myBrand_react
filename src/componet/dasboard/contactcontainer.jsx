import React, { useEffect, useState } from 'react';

function ContactContainer() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchDataAndInitiatePagination();
    }, []);

    const fetchDataAndInitiatePagination = async () => {
        try {
            const response = await fetch('https://mybland-backend-c3uv.onrender.com/allcontact');
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const responseData = await response.json();
            const { contacts } = responseData;

            if (Array.isArray(contacts)) {
                setContacts(contacts);
            } else {
                throw new Error('Invalid data format: contacts is not an array');
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    return (
        <main className="main-content">
            <table className="table text-nowrap">
                <thead>
                    <tr>
                        <th className="border-top-0">#</th>
                        <th className="border-top-0">Names</th>
                        <th className="border-top-0">Email</th>
                        <th className="border-top-0">Telephone</th>
                        <th className="border-top-0">Message</th>
                    </tr>
                </thead>
                <tbody id="blogTableBody">
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{contact.FullName || ''}</td>
                            <td>{contact.email || ''}</td>
                            <td>{contact.phone || ''}</td>
                            <td>{contact.message || ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default ContactContainer;
