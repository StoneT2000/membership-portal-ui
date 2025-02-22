import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LeaderListItem from '../components/LeaderListItem';
import { getDefaultProfile } from '../utils';
import { fetchLeaderboard } from '../actions/leaderboardActions';

const FourAndMoreContainer = props => {
  useEffect(() => {
    props.fetchLeaderboard();
  }, []);

  return (
    <>
      {getFourAndMore(props.users)}
    </>
  )
};

const getFourAndMore = users => {
  let fourAndMore = [];

  for (let i = 3; i < users.length; i++) {
    const user = users[i];
    fourAndMore.push(
      <LeaderListItem
        key={i}
        exp={user.points}
        image={getDefaultProfile()}
        name={`${user.firstName} ${user.lastName}`}
        placement={i+1}
        rank={user.rank}
        />
    )
  }

  return fourAndMore;
}

const mapStateToProps = state => ({
  users: state.leaderboard.users,
});

export default connect(
  mapStateToProps,
  { fetchLeaderboard }
)(FourAndMoreContainer);
