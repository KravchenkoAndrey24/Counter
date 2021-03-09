import React, { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import s from './Settings.module.css'
import Values from './Values/Values';

type SettingsPropsType = {
	values: string[]
	error: string
	textValues: string
	setError: (error: string) => void
	setValues: (values: string[]) => void
	setTextValues: (textValues: string) => void
}




const Settings = (props: SettingsPropsType) => {

	let inputMaxValue = React.createRef<HTMLInputElement>();
	let inputMinValue = React.createRef<HTMLInputElement>();

	let [maxValueInInput, setMaxValueInInput] = useState(props.values[1]);
	let [minValueInInput, setMinValueInInput] = useState(props.values[0]);


	let disabledButton = !props.textValues ? true : false

	const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		props.setTextValues("set values and press 'set'");
		if (+e.currentTarget.value <= +minValueInInput) {
			props.setTextValues('');
			props.setError('Incorrect value');
			inputMinValue.current?.classList.add(s.input_red_max)
			inputMaxValue.current?.classList.add(s.input_red_max)
			setMaxValueInInput(e.currentTarget.value);
		} else if (e.currentTarget.value) {
			if (+minValueInInput < 0) {
				props.setTextValues('');
				props.setError("Incorrect value");
			} else {
				props.setError('')
				inputMinValue.current?.classList.remove(s.input_red_max)
				inputMaxValue.current?.classList.remove(s.input_red_max)
			}
			setMaxValueInInput(e.currentTarget.value);
		}

	}

	const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		props.setTextValues("set values and press 'set'");
		if (+e.currentTarget.value >= +maxValueInInput) {
			props.setTextValues('')
			props.setError('Incorrect value')
			e.target.classList.add(s.input_red_max);
			setMinValueInInput(e.currentTarget.value);
		} else if (e.currentTarget.value) {
			if (+e.currentTarget.value < 0) {
				props.setTextValues('')
				props.setError("Incorrect value");
				e.target.classList.add(s.input_red_max);
			} else {
				props.setError('')
				inputMaxValue.current?.classList.remove(s.input_red_max)
				e.target.classList.remove(s.input_red_max);
			}
			setMinValueInInput(e.currentTarget.value);
		}
	}

	const onClickSetButton = () => {
		props.setValues([minValueInInput, maxValueInInput])
	}
	return (
		<div className={s.main__block}>
			<div className={s.values}>
				<Values text={'max value: '} createRef={inputMaxValue} value={maxValueInInput} onChange={onChangeMaxValue} />
				<Values text={'min value: '} createRef={inputMinValue} value={minValueInInput} onChange={onChangeMinValue} />
			</div>
			<div className={s.div__buttons}>
				<Button disabled={disabledButton} onClick={onClickSetButton} title={'set'} />
			</div>
		</div >
	)
}

export default Settings;