import React from 'react';
import * as S from './styles';

interface User {
  id: string;
  name: string;
}

interface Props {
  users: User[];
}

export const NameItem: React.FC<Props> = ({
  users,
}) => {
  const nameItems = [(<S.NameItem isSelected={false} isLocked={true}>대법원</S.NameItem>)]
  .concat(users.map(user => (
    <S.NameItem key={user.id} isSelected={false} isLocked={false}>
      {user.name}
    </S.NameItem>
  )));

  return <S.NameList>{nameItems}</S.NameList>;
};
