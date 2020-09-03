import '../Sass/App.sass'
// React
import React, { useState, useEffect } from 'react'
// Assets
import logo from '../../Assets/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBraille, faBox, faExchangeAlt, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Console } from 'console'

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
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="/#">
							<img src="https://camo.githubusercontent.com/33c9404f15f989e638a21f2a664a68e9b4b89b26/68747470733a2f2f692e696d6775722e636f6d2f314252423463462e706e67" alt="logo" />
						</a>
					</div>

					<div className="navbar-menu">
						<div className="navbar-start">
							<div className="navbar-item">
								<div className="buttons">
									<a href="/#"className="button is-primary">
										<FontAwesomeIcon icon={faUsers} />
										100
									</a>
									<a href="/#"className="button is-info">
									<FontAwesomeIcon icon={faFileAlt} />
										14
									</a>
								</div>
							</div>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="tabs is-right is-toggle">
									<ul>
										<li className="is-active">
											<a href="/#">
												<FontAwesomeIcon icon={faClock} />
												Activity
											</a>
										</li>
										<li>
											<a href="/#">
												<FontAwesomeIcon icon={faBraille} />
												Keywords
											</a>
										</li>
										<li>
											<a href="/#">
												<FontAwesomeIcon icon={faBox} />
												Containers
											</a>
										</li>
										<li>
											<a href="/#">
												<FontAwesomeIcon icon={faExchangeAlt} />
												Transfers
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}
