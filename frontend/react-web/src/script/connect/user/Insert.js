import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import Insert from '~/component/user/Insert';
import {
  insert,
} from '~/action/user/user';
import {
  changeId,
  changeName,
} from '~/action/user/insert';

const actionCreators = {
  insert,
  changeId,
  changeName,
};

function mapStateToProps(state, ownProps = {}) {
  const { user: { insert: { user, }, }, } = state;
  return { user, };
}

export default connect(mapStateToProps, actionCreators,)(Insert);
