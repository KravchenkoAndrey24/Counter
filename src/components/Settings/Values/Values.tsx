import React, { ChangeEvent, RefObject } from 'react';


type ValuesProps = {
	text: string
	createRef: RefObject<HTMLInputElement>
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Values = (props: ValuesProps) => {
	return (
		<div>
			{props.text}
			<input type="number" ref={props.createRef} value={props.value} onChange={(e) => { +e.currentTarget.value >= 0 ? props.onChange(e) : props.onChange(e) }} />
		</div>
	)
}

export default Values;

