import React from 'react';
import Button from './Button/Button';
import s from './counter.module.css'

type CounterPropsType = {
	count: number
	maxValue: string
	minValue: string
	textError: string
	textValues: string
	onClickInc: () => void
	onClickReset: () => void
}




const Counter = (props: CounterPropsType) => {

	const onClickInc = () => { props.onClickInc() }
	const onClickReset = () => { props.onClickReset() }

	let disabledButton = props.textValues ? true : props.textError ? true : props.count >= +props.maxValue;

	return (
		<div className={s.main__block}>
			<div className={`${s.counter}   ${props.textError ? s.main__block__textColor : props.count >= +props.maxValue ? s.main__block__textColor : null}`}>
				{
					props.textValues ? props.textValues : !props.textError ? props.count : props.textError
				}
			</div>
			<div className={s.div__buttons}>
				<Button disabled={disabledButton} onClick={onClickInc} title={'inc'} />
				<Button disabled={props.count === +props.minValue} onClick={onClickReset} title={'reset'} />
			</div>
		</div >
	)
}

export default Counter;