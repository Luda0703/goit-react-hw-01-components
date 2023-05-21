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
    stats, 
    statsFollowers,
    statsViews,
    statsLikes,

    
}) => {
    return (
        <User>
  <Description>
    <UserImg
      src={avatar}
      alt={tag}
      class="avatar"
    />
    <UserName >{username}</UserName>
    <TagName>{tag}</TagName>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsLi>
      <Label>Followers</Label>
      <Quantity>{statsFollowers}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Views</Label>
      <Quantity>{statsViews}</Quantity>
    </StatsLi>
    <StatsLi>
      <Label>Likes</Label>
      <Quantity>{statsLikes}</Quantity>
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
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired
    
}