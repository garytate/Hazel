import '../Sass/App.sass'
// React
import React, { useState, useEffect, Component } from 'react'

import Keyword from './Keyword'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBraille, faBox, faExchangeAlt, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Console } from 'console'



import Tabs from './Tabs'

export default function App() {
	// you should always use function components!
	// class components are practically deprecated

	// state hooks replace the the state in a function component
	// gary note: this is basically AccessorFunc
	const [logFiles, setLogFiles] = useState({});
	const [num, setNum] = useState(0);

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
				<Tabs />
			</header>

			<div className="Main">
				<Keyword />
			</div>
		</div>
	)
}
