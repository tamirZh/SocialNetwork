import React from 'react';

export default function SignUpForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.status === 200) {
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">Имя</label>
        <input name="firstName" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName2" className="form-label">Фамилия</label>
        <input name="secondName" type="text" className="form-control" id="exampleInputName2" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName3" className="form-label">Мужской</label>
        <input name="sex" type="radio" value={'male'} className="form-control" id="exampleInputName3" aria-describedby="emailHelp" />
        <label htmlFor="exampleInputName3" className="form-label">Женский</label>
        <input name="sex" type="radio" value={'female'} className="form-control" id="exampleInputName31" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
        <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName4" className="form-label">Аватар</label>
        <input name="image" type="text" className="form-control" id="exampleInputName4" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName5" className="form-label">Немного о себе</label>
        <input name="description" type="text" className="form-control" id="exampleInputName5" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName6" className="form-label">Date Of Birth</label>
        <input name="dateOfBirth" type="date" className="form-control" id="exampleInputName6" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
