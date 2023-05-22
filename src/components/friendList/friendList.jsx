import PropTypes from 'prop-types';
import {
    Item, 
    ItemList,
    ItemName, 
    ItemImg,
    ItemIsOnline,
    isOnlineTrue,
    isOnlineFalse

} from './friendList.styled';

export const FriendList = ({ friends }) => {
    return (
      <ItemList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <Item key={id}>
            
            <ItemIsOnline >{isOnline}</ItemIsOnline>
            <ItemImg src={avatar} alt="User avatar"></ItemImg>
            <ItemName>{name}</ItemName>
          </Item>
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

//   const setBgColor = props => {
//     switch (props.isOnline) {
//         case 'true':
//             return isOnlineTrue;
//         case 'false':
//             return isOnlineFalse;     
//     }
// }

// const setBgColor = (props) => {
// if(props.isOnline) {
//    return isOnlineTrue;
// }
//     return isOnlineFalse;
// }

// style={{ backgroundColor: setBgColor()}}



