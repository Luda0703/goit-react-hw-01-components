import user from 'data/user.json'
// import { profile} from 'components'
import { Profile } from './profile/profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        background: '#999999'
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
    </div>
  );
};
