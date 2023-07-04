import PropTypes from 'prop-types';
import css from "./Profile.module.css";

const Profile = ({username, tag, location, avatar, stats: {followers, views, likes }}) => {
    return (
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt={avatar}
                className={css.description__avatar}
            />
            <p className={css.description__name}>{username}</p>
            <p className={css.description__tag}>{tag}</p>
            <p className={css.description__location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.colums}>
                <span className={css.colums__label}>{followers}</span>
                <span className={css.colums__quantity}>{views}</span>
            </li>
            <li  className={css.colums}>
                <span className={css.colums__label}>{views}</span>
                <span className={css.colums__quantity}>{views}</span>
            </li>
            <li  className={css.colums}>
                 <span className={css.colums__label}>{likes}</span>
                 <span className={css.colums__quantity}>{views}</span>
            </li>
        </ul>
    </div>
    )
}


Profile.propTypes = {
username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired, })
}

export default Profile;