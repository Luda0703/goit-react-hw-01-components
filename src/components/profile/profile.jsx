import PropTypes from 'prop-types';
import { 
    User,
    Description,
    UserImg,
    UserName,
    TagName,
    Location,
    Stats,
    StatsLi,
    Label,
    Quantity
    
 } from './profile.styled'

export const Profile = ({ 
    username, 
    tag, 
    location, 
    avatar, 
    stats: {
    followers,
    views,
    likes,
    }
    
}) => {
    return (
    <User>
  <Description>
    <UserImg
      src={avatar}
      alt={tag}
      
    />
    <UserName >{username}</UserName>
    <TagName>{tag}</TagName>
    <Location>{location}</Location>
  </Description>

  <Stats >
    <StatsLi>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsLi>
  </Stats>
</User>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    } )
    
}