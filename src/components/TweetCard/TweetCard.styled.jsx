import styled from '@emotion/styled';

export const Text = styled.li`
  text-transform: uppercase;
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  line-height: calc(24.38 / 20);
  font-family: Montserrat;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  width: 196px;
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  text-transform: uppercase;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  line-height: calc(21.94 / 20);
  font-family: Montserrat;
  border-radius: 10px;
  background-color: #ebd8ff;
  margin-top: 26px;
  &:hover,
  :focus {
    background-color: #e9e3f0;
  }
  &.active {
    background-color: #5cd3a8;
    &:hover,
    :focus {
      background-color: #cdf3e5;
    }
  }
`;

export const Item = styled.div`
  text-align: center;
`;
