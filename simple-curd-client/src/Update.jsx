import { useLoaderData } from "react-router-dom";

const Update = () => {

    const user = useLoaderData();

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const updatedUser={name,email};

        fetch(`http://localhost:5000/update/${user._id}`,{
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(updatedUser),
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    }

    return (
        <div>
            {user.name}
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={user.email} id="" />
                <br />
                <input type="submit" value="Update"/>
                <br />
            </form>
        </div>
    );
};

export default Update;