import React from 'react';
import { config } from '../../../config';
import { navigate } from '../../navigation/navigation';
import { TTodoListItem } from '../../types/webServices/todoList';
import { Card, Text } from '../Kit';

export type TodoListItemProps = {
  item: TTodoListItem;
};

export function TodoListItem(props: TodoListItemProps) {
  const { item } = props;

  const navigateToTodoItem = (title: string) => {
    navigate(config.routes.listItem, { title });
  };

  return (
    <Card
      bg="secondaryBg"
      margin={1}
      padding={1}
      curve
      border
      onTouchStart={() => navigateToTodoItem(item.title)}
    >
      <Text typo="lg" bold>
        {item.title}
      </Text>
      <Card borderWidth="0.5px" margin={[0, 0, 1, 0]} />
      <Text typo="sm" ellipsizeMode="tail" numberOfLines={1}>
        {item.description}
      </Text>
    </Card>
  );
}
