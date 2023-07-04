import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';
import css from "./Statistics.module.css";

// import css from "./Statistics.module.scss";
    
function Statistics({
   title, stats
}) {
    return (

      <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

     <ul class='stat-list'>
         {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{backgroundColor: getRandomColor()}}   className={css.statlist__item}>
            <span className={css.statlist__label}>{label}</span>
            <span className={css.statlist__percentage}>{percentage}%</span>
          </li>
        ))}
          
      </ul>
    </section>
    )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;