import styled from 'styled-components/native';


export const Wrapper = styled.TouchableOpacity`
  width: 24;
  height: 24;
  margin-top: 5;
  margin-bottom: 5;
  margin-right:25;  
`;
export const InnerContainer = styled.View`
  position: absolute;
  right: -10;
  top: -6;
  background-color: #fff;
  border-radius: 8;
  width: 20;
  height: 20;
  justify-content: center;
  align-items: center;
`;

export const BadgeTxt = styled.Text`
  color: #000;
  font-size: 14;
  font-weight: normal;
`;