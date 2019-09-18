import styled from 'styled-components';

interface NameItemProps {
  isSelected: boolean;
  isLocked: boolean;
}

export const NameItem = styled.div`
  background-color: ${(props: NameItemProps) => (props.isSelected ? '#3adad0' : '#ffffff')};
  color: ${(props: NameItemProps) => (props.isSelected ? '#ffffff' : '#808080')};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: ${(props: NameItemProps) => (props.isLocked ? 'default' : 'pointer')};
  &:hover {
    background-color:  ${(props: NameItemProps) => (props.isLocked ? '#ffffff' : '#3adad0')};
    color: ${(props: NameItemProps) => (props.isLocked ? '#808080' : '#ffffff')};
  }
`;

export const NameList = styled.div`
  background-color: '#ffffff';
  width: 180px;
  height: 800px;
`;
