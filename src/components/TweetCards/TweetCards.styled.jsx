import styled from '@emotion/styled';
import { ReactComponent as Fon } from '../../images/picture2.svg';

export const BgFon = styled(Fon)`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Border = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const LogoSection = styled.section`
  height: 174px;
  padding: 20px;
  position: relative;
`;

export const TweetSection = styled.section`
  margin-top: 30px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const InfoSection = styled.section`
  padding-top: 62px;
  padding-bottom: 36px;
`;

export const Avatar = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  top: -42%;
  left: 50%;
  transform: translate(-50%, -42%);
  background-color: #ae7be3;
`;
