import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className="counter">
			<h2 id="counter">{counter}</h2>
			<button
				onClick={inc}
			>INC</button>
			<button
				onClick={dec}
			>DEC</button>
			<button
				onClick={rnd}
			>RND</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state,
	}
}

export default connect(
	mapStateToProps,
	actions
)(Counter)