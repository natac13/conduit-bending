import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';
import withProps from 'recompose/withProps';
import { curry, compose } from 'ramda';

import Input from 'react-toolbox/lib/input';

import style from './style.scss';

function StubBend(props) {
  const {
    fields: { stubLength },
    handleSubmit,
    onSubmit,
    actions,
  } = props;
  return (
    <div className={style.wrapper}>
      <form
        onSubmit={handleSubmit(onSubmit('test'))}
        className={style.form}
      >
        <Input
          className={style.search}
          placeholder="Enter Stub Length"
          name="stubLength"
          type="number"
          { ...stubLength }
        />
      </form>
    </div>
  );
}

StubBend.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  actions: ImmutablePropTypes.map,
  fields: PropTypes.object
};


const onSubmit = curry(function (x, values) {
  return new Promise((resolve, reject) => {
    const { stubLength } = values;
    const action = undefined;
    setTimeout(() => {
      if (action.error) {
        const error = {
          _error: 'No StopID found.',
        };
        return reject(error);
      }
      return resolve();
    }, 1000);
  });
});

export default compose(
  reduxForm({
    form: 'stubBend',
    fields: ['stubLength'],
    getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS(),
  }),
  withProps({ onSubmit })
)(StubBend);
