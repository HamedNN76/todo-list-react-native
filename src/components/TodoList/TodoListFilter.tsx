import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loadTodoList } from '../../redux/modules/todoList';
import { Color } from '../../stylesheet';
import { Button, Card, Text } from '../Kit';

export type TFilters = Array<{
  title: string;
  bg: Color;
  color: Color;
}>;

export const filters: TFilters = [
  {
    title: 'Completed',
    bg: 'success',
    color: 'white',
  },
  {
    title: 'InProgress',
    bg: 'warning',
    color: 'white',
  },
  {
    title: 'Todo',
    bg: 'primary',
    color: 'primaryText',
  },
  {
    title: 'Test',
    bg: 'failure',
    color: 'white',
  },
];

export function TodoListFilter() {
  const { form } = useAppSelector((state) => state.todoList);
  const dispatch = useAppDispatch();

  const handleGetCategoryList = (category?: number) => {
    dispatch(loadTodoList(category));
  };

  return (
    <Card bg="secondaryBg">
      <Card
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding={1}
      >
        <Text typo="md">Filters</Text>
        <Button
          key="all"
          text="all"
          bg="secondary"
          color="primaryText"
          _minWidth="0px"
          _height="24px"
          bold={form === undefined}
          typo={form === undefined ? 'sm' : 'xs'}
          onPress={() => handleGetCategoryList()}
        />
      </Card>
      <Card borderWidth="0.5px" />
      <Card
        flexDirection="row"
        _flexWrap="wrap"
        justifyContent="space-between"
        margin={[0, 0, 1, 0]}
      >
        {filters.map(({ title, bg, color }, i) => (
          <Button
            margin={1}
            key={title}
            text={title}
            bg={bg}
            color={color}
            _minWidth="0px"
            _height="32px"
            bold={form === i}
            typo={form === i ? 'sm' : 'xs'}
            onPress={() => handleGetCategoryList(i)}
          />
        ))}
      </Card>
    </Card>
  );
}
