import {
  bindActionCreators,
 } from 'redux';
import {
  connect,
 } from 'react-redux';

import Search from '~/component/user/Search';
import {
  selectById,
} from '~/action/user/user';
import {
  changeId,
} from '~/action/user/search';

const actionCreators = {
  selectById,
  changeId,
};

function mapStateToProps(state, ownProps = {}) {
  const { user: { search: { id, }, }, } = state;
  return { id, };
}

export default connect(mapStateToProps, actionCreators,)(Search);
