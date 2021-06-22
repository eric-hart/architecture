import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import Select from '~/component/user/Select';
import {
  selectAll,
  deleteById,
} from '~/action/user/user';

const actionCreators = {
  selectAll,
  deleteById,
};

function mapStateToProps(state, ownProps = {}) {
  const { user: { select: { users, }, }, } = state;
  return { users, };
}

export default connect(mapStateToProps, actionCreators,)(Select);
