import PropTypes from "prop-types";
import { FriendListItem } from './friendListItem';
import { ItemList } from './friendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ItemList>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </ItemList>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired
            }
        )
    ).isRequired
}