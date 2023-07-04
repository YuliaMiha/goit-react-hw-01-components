import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items }) => {
    return (
        <table className={css.transaction}>
            <thead>
                <tr className={css.titleList}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.container}>
                {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={css.listRow}>
                    <td className={css.listColumn}>{type}</td>
                    <td className={css.listColumn}>{amount}</td>
                    <td className={css.listColumn}>{currency}</td>
                </tr>
                ))}    
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency:PropTypes.string.isRequired,
    }))
}