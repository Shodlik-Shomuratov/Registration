import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => (
    <div className="register">
        <div className="register__image">
        </div>
        <div className="register__form">
            <div className="form__content">
                <h1 className="head__text">Ro'yxatdan o'tish</h1>
                <p className="lead__text">Quyidagi formani to'ldirib, ro'yxatdan o'ting</p>
                <form className="form__control" action="/login" method="POST">
                    <div className="form__control">
                        <div className="form__group">
                            <label for="firstname">Ismingizni kiriting</label>
                            <input type="firstname" id="firstname" className="form__input" name="firstname" placeholder="Shodlik" required/>
                        </div>
                        <div className="form__group">
                            <label for="lastname">Familiyangizni kiriting</label>
                            <input type="lastname" id="lastname" className="form__input" name="lastname" placeholder="Shomuratov" required/>
                        </div>
                    </div>
                    <div className="form__group">
                        <label for="email">E-mailni kiriting</label>
                        <input type="email" id="email" className="form__input" name="email" placeholder="example@email.com" required/>
                    </div>
                    <div className="form__group">
                        <label for="password">Parol kiriting</label>
                        <input type="password" id="password" className="form__input" name="password" required/>
                    </div>
                    <div className="form__group">
                        <label for="password2">Parolni qayta kiriting</label>
                        <input type="password" id="password2" className="form__input" name="password2" required/>
                    </div>
                    <div className="form__control">
                        <button type="submit" className="btn btn__primary">Register</button>
                        <Link to="/login" className="btn btn__outline">
                            Login
                        </Link>
                    </div>
                </form>
                <p className="lead__text">
                    Hali ro'yxatdan o'tmaganmisiz? Unda hoziroq <Link to="/login">ro'yxatdan o'ting</Link>
                </p>
            </div>
        </div>
    </div>
)

export default Register