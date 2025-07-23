import React, {useState } from "react";
import Navbar from "../../navbar/navbar";

function UserPost() {

    const [formData, setFormData] = useState({
        name: '',
        points: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://flask-project-6vjl.onrender.com/user_save',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log(data);
            setFormData({ name: '', points: '' });
        }
        catch(e){
            console.log(e);
        }
    }


    return (
        <div>
            <Navbar />
            <div>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                />
                <input
                type="text"
                name="points"
                placeholder="Points"
                value={formData.points}
                onChange={handleChange}
                required
                />
                <button type="submit">Submitt</button>
            </form>
            </div>
        </div>
    );
}

export default UserPost;