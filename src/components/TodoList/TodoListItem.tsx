import React from 'react';
import { config } from '../../../config';
import { navigate } from '../../navigation/navigation';
import { TTodoListItem } from '../../types/webServices/todoList';
import { Button, Card, Text } from '../Kit';
import { HR } from '../Kit/HR';
import { filters } from './TodoListFilter';

export type TodoListItemProps = {
  item: TTodoListItem;
};

export function TodoListItem(props: TodoListItemProps) {
  const { item } = props;

  const navigateToTodoItem = () => {
    navigate(config.routes.listItem, { title: item.title, id: item._id });
  };

  const { bg, color } = filters[item.category];

  return (
    <Card
      bg="secondaryBg"
      margin={[1, 0]}
      padding={1}
      curve
      border
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Card flex={1} padding={[0, 1, 0, 0]}>
        <Text typo="lg" bold color={bg}>
          {item.title}
        </Text>
        <HR margin={[0, 0, 1, 0]} />
        <Text typo="sm" ellipsizeMode="tail" numberOfLines={1}>
          {item.description}
        </Text>
      </Card>
      <Card>
        <Button
          text=""
          startIcon="eye"
          _minWidth="0px"
          padding={0}
          _height="40px"
          margin={0}
          bg={bg}
          color={color}
          onPress={navigateToTodoItem}
        />
      </Card>
    </Card>
  );
}
