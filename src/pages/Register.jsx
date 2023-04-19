import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const onChange = () => {
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
                    <FaUser /> Registro
                </h4>
                <p>Por favor crea tu cuenta</p>
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
                            type="text" 
                            name="email" 
                            id="email"
                            value={email} 
                            placeholder="Teclea un email" 
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
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password2" 
                            id="password2"
                            value={password2} 
                            placeholder="Confirma tu password" 
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

export default Register