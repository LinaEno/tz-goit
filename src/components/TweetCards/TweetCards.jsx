import { ReactComponent as Logo } from '../../images/Logo.svg';
import TweetCard from 'components/TweetCard/TweetCard';
import users from '../../users';
import {
  Avatar,
  BgFon,
  Border,
  InfoSection,
  LogoSection,
  TweetSection,
} from './TweetCards.styled';

const TweetCards = () => {
  return (
    <>
      {users.map(user => {
        return (
          <TweetSection key={user.id}>
            <LogoSection>
              <Logo />
              <BgFon />
            </LogoSection>
            <Border>
              <Avatar src={user.avatar} alt={user.name} />
            </Border>
            <InfoSection>
              <TweetCard user={user} />
            </InfoSection>
          </TweetSection>
        );
      })}
    </>
  );
};

export default TweetCards;
