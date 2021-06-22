import {
  bindActionCreators,
 } from 'redux';
import {
  connect,
} from 'react-redux';

import Update from '~/component/user/Update';
import {
  update,
} from '~/action/user/user';
import {
  changeId,
  changeName,
} from '~/action/user/update';

const actionCreators = {
  update,
  changeId,
  changeName,
};

function mapStateToProps(state, ownProps = {}) {
  const { user: { update: { user, }, }, } = state;
  return { user, };
}

export default connect(mapStateToProps, actionCreators,)(Update);
