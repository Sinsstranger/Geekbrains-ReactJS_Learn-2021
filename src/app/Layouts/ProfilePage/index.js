import {useState, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {PROFILE_SELECTOR} from "../../store/ProfilePage/secectors";
import {CHANGE_USER_PROFILE} from "../../store/ProfilePage/constants";
import './ProfilePage.sass';

export const ProfilePage = (props) => {
	const [profile, dispatch] = [useSelector(PROFILE_SELECTOR), useDispatch()];
	const [editMode, setEditMode] = useState(false);
	const [formName, setFormName] = useState(profile.name);
	const [formAge, setFormAge] = useState(profile.age);
	const [formDescription, setFormDescription] = useState(profile.description);
	const handleCardChange = useCallback(() => {
		setEditMode(!editMode);
		if (editMode) {
			let prepare = {
				id: profile.id,
				name: formName || profile.name,
				age: formAge || profile.age,
				description: formDescription || profile.description,
				photo: `https://sun6-20.userapi.com/s/v1/ig2/Ci01AhXW7_a7lUdlHrT_NYdudrAWjYDcTV0gU2tE3MkZNtb-8m51lO2lW9GDTTDha0OeQWdJPNjDoe7TXRcHHLFi.jpg?size=400x480&quality=96&crop=0,0,500,600&ava=1` || `https://via.placeholder.com/150`
			}
			if (JSON.stringify(prepare) !== JSON.stringify(profile)) {
				dispatch({type: CHANGE_USER_PROFILE, payload: prepare});
			}
		}
	},[dispatch, editMode, formAge, formDescription, formName, profile]);
	return (
		<section className="profile-card" id={profile.id}>
			<div className="profile-card__left">
				<img src={profile.photo} alt={`Pict of ${profile.name}`} className="profile-card__image"/>
				<p className="profile-card__name"><span>Name: </span>{!editMode ? <span>{formName}</span> : <input onChange={(e) => {
					setFormName(e.target.value.toString().trim())
				}} type="text" value={formName} placeholder='You Name' className="profile-card__name--input"/>}</p>
				<p className="profile-card__age"><span>Age: </span>{!editMode ? <span>{formAge}</span> : <input onChange={(e) => {
					setFormAge(parseInt(e.target.value.trim()) || formAge)
				}} type="text" value={formAge} placeholder='You Name' className="profile-card__description--input"/>}</p>
				<button onClick={handleCardChange}>Редактировать</button>
			</div>
			<div className="profile-card__right">
				<p className="profile-card__description"><span>Description: </span>{!editMode ? formDescription : <textarea onChange={(e) => {
					setFormDescription(e.target.value.toString().trim())
				}} placeholder='You Name' className="profile-card__description--textarea" value={formDescription}/>}</p>
			</div>

		</section>
	);
}