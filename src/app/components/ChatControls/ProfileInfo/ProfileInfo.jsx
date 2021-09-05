import {useSelector} from "react-redux";
import {PROFILE_SELECTOR} from "../../../store/Profile/secectors";
import './ProfileInfo.sass';
export const ProfileInfo = (props) => {
	const [name, photo] = [useSelector(PROFILE_SELECTOR).name, useSelector(PROFILE_SELECTOR).photo];
	return (<div className="profile-info">
		<img src={photo} alt="#" className="profile-info__image"/>
		<p className="profile-info__name">{name}</p>
	</div>);
}