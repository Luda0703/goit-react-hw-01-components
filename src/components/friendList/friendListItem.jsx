import PropTypes from 'prop-types';
import {
    Item, 
    ItemName, 
    ItemImg,
    ItemIsOnline,
    isOnlineTrue,
    isOnlineFalse

} from './friendList.styled';

export const FriendListItem = ({ avatar, name, status }) => {
    return (
          <Item> 
            <ItemIsOnline status={status}/>
            <ItemImg src={avatar} alt={name}></ItemImg>
            <ItemName>{name}</ItemName>
          </Item>
    );
  };

  FriendListItem.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}








