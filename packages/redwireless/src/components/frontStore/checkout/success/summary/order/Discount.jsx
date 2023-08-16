import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '@redwireless/redwireless/src/lib/locale/translate';

export function Discount({ discount, code }) {
  if (!discount) {
    return null;
  }

  return (
    <div className="summary-row">
      <span>{_('Discount')}</span>
      <div>
        <div>{code}</div>
        <div>{discount}</div>
      </div>
    </div>
  );
}

Discount.propTypes = {
  code: PropTypes.string,
  discount: PropTypes.number
};

Discount.defaultProps = {
  code: undefined,
  discount: undefined
};