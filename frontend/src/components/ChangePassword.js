import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function ChangePassword({ onClose }) {
	const handleCheck = () => { };
	const [currentPassword, setcurrentPassword] = useState("");
	const [changedPassword, setchangedPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");
	const [pwderror, setpwderror] = useState(false);
	const [hint, sethint] = useState("");
	const changeCurrent = (e) => {
		setcurrentPassword(e.currentTarget.value);
	};
	const changeChanged = (e) => {
		setchangedPassword(e.currentTarget.value);
	};
	const changeConfirm = (e) => {
		setconfirmPassword(e.currentTarget.value);
	};
	const checkPwd = () => {
		if (currentPassword === "") {
			setpwderror(true);
			sethint("현재 비밀번호를 입력해주세요.");
		} else if (changedPassword === "") {
			setpwderror(true);
			sethint("비밀번호를 입력해주세요.");
		} else if (changedPassword !== confirmPassword) {
			setpwderror(true);
			sethint("비밀번호 확인이 일치하지 않습니다.");
		} else if (changedPassword === confirmPassword) {
			console.log("비밀번호가 같음.");
			onClose();
		}
	};
	return (
		<div className="changePassword">
			<TextField
				className="currentPassword"
				label="현재 비밀번호"
				placeholder="현재 비밀번호"
				InputLabelProps={{
					shrink: true,
				}}
				type="password"
				variant="outlined"
				value={currentPassword}
				onChange={changeCurrent}
			/>
			<TextField
				className="futurePassword"
				label="비밀번호"
				placeholder="비밀번호"
				InputLabelProps={{
					shrink: true,
				}}
				error={pwderror}
				type="password"
				variant="outlined"
				value={changedPassword}
				onChange={changeChanged}
			/>
			<TextField
				className="futurePassword"
				label="비밀번호 확인"
				placeholder="비밀번호 확인"
				InputLabelProps={{
					shrink: true,
				}}
				error={pwderror}
				type="password"
				variant="outlined"
				value={confirmPassword}
				onChange={changeConfirm}
				helperText={hint}
			/>
			<div>
				<Button className="pwdBtn" onClick={onClose}>
					취소
				</Button>
				<Button className="pwdBtn" onClick={checkPwd}>
					변경
				</Button>
			</div>
		</div>
	);
}

export default ChangePassword;
