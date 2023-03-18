import { useEffect, useState } from 'react';
import { Button, Item, Text } from './TweetCard.styled';

const TweetCard = ({ user }) => {
  const localUser = JSON.parse(localStorage.getItem(user.id));
  const [isFollowing, setIsFollowing] = useState(
    localUser ? localUser.isFollowing : false
  );
  const [totalFollowers, setTotalFollowers] = useState(
    localUser ? localUser.totalFollowers : user.followers
  );

  const onClickBtn = () => {
    setIsFollowing(!isFollowing);
    setTotalFollowers(prevTotalFollowers =>
      isFollowing ? prevTotalFollowers - 1 : prevTotalFollowers + 1
    );
  };

  useEffect(() => {
    localStorage.setItem(
      user.id,
      JSON.stringify({ isFollowing, totalFollowers })
    );
  }, [isFollowing, totalFollowers, user.id]);

  return (
    <Item>
      <ul>
        <Text>{user.name}</Text>
        <Text>{user.tweets} tweets</Text>
        <Text>{totalFollowers.toLocaleString('en-US')} Followers</Text>
      </ul>
      <Button
        type="button"
        onClick={onClickBtn}
        className={isFollowing ? 'active' : ''}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Item>
  );
};

export default TweetCard;
