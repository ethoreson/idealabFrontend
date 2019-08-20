import React, { useState } from 'react';
import './LoginManager.css';

const LoginManager = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='container'>
			<div className='card'>
				<h1>3D Printing and Upload Queue</h1>
				<h2>Sign In</h2>
				<form>
					<input
						name='email'
						placeholder='email'
						autoComplete='off'
						autoFocus
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						name='password'
						placeholder='password'
						type='password'
						autoComplete='off'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type='submit'>SIGN Up</button>
				</form>
				<p>This is the email state: {email}</p>
				<p>This is the password state: {password}</p>
			</div>
		</div>
	);
};

export default LoginManager;
