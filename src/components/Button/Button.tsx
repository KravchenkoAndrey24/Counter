import React from 'react';

type ButtonPropsType = {
	title: string
	disabled: boolean
	onClick: () => void
}

const Button = (props: ButtonPropsType) => {
	return (
		<button disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
	)
}

export default Button;