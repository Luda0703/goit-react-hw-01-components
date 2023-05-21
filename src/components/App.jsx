import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';

export const App = () => {
  return (
    <div
      style={{
        height: '200vh',
        // display: 'flex',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight:'auto',
        padding: '100px',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        background: '#C8C8C8'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      statsFollowers={user.stats.followers}
      statsViews={user.stats.views}
      statsLikes={user.stats.likes}
     />

     <Statistics title="Upload stats" stats={data} />
     {/* <Statistics stats={data} /> */}

     <FriendList friends={friends} />;
    </div>
  );

};
