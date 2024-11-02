import './App.css'

function App() {

  const handleForm = (e) => {
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res =>res.json())
      .then(data=>console.log(data))
  }

  return (
    <>
      <h1>Simple Crud Client</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add user"/>
        <br />
      </form>
    </>
  )
}

export default App
