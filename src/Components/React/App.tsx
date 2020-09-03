import '../Sass/App.sass'
// React
import React, { useState, useEffect } from 'react'
// Assets
import logo from '../../Assets/logo.svg'

export default function App() {
	// you should always use function components!
	// class components are practically deprecated

	// state hooks replace the the state in a function component
	// gary note: this is basically AccessorFunc
	const [countHookExample, setCountHookExample] = useState(0)

	// effect hooks replace the lifecycle methods in a function component
	useEffect(
		() => {
			console.log('mouted')
			return () => {
				console.log('exited')
			}
		},
		[
			/**
			 * variables that trigger this effect.
			 * if [] triggers only on mounting.
			 * if undefined trigers on every render.
			 */
		]
	)

	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className="title">hazel</h1>
			</header>
		</div>
	)
}
