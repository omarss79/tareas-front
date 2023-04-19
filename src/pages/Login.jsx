import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {

  const [formData, setFormData] = useState({
      email: '',
      password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }

  const onSubmit = (e) => {
      e.preventDefault()

  }
    return (
        <>
            <section className='heading'>
                <h4>
                    <FaSignInAlt /> Login
                </h4>
                <p>Por favor teclea tus credenciales</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            placeholder="Teclea un nombre" 
                            onChange={onChange}  />
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password} 
                            placeholder="Teclea un password" 
                            onChange={onChange}  />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login