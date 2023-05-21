import PropTypes from 'prop-types';
import {Item, ItemList} from './friendList.styled'

export const FriendList = ({ friends }) => {
    return (
      <ItemList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <Item
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </ItemList>
    );
  };

  FriendList.proTotype = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };