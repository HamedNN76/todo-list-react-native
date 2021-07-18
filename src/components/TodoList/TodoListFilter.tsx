import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loadTodoList } from '../../redux/modules/todoList';
import { Color } from '../../stylesheet';
import { Button, Card, Text } from '../Kit';
import { HR } from '../Kit/HR';

export type TFilters = Array<{
  label: string;
  bg: Color;
  color: Color;
}>;

export const filters: TFilters = [
  {
    label: 'Completed',
    bg: 'success',
    color: 'white',
  },
  {
    label: 'InProgress',
    bg: 'warning',
    color: 'white',
  },
  {
    label: 'Todo',
    bg: 'secondary',
    color: 'primaryText',
  },
  {
    label: 'Test',
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
          text="All"
          bg="primaryText"
          color="white"
          _minWidth="0px"
          _height="24px"
          bold={form === undefined}
          typo={form === undefined ? 'sm' : 'xs'}
          onPress={() => handleGetCategoryList()}
        />
      </Card>
      <HR />
      <Card
        flexDirection="row"
        _flexWrap="wrap"
        justifyContent="center"
        margin={[0, 0, 1, 0]}
      >
        {filters.map(({ label, bg, color }, i) => (
          <Button
            margin={1}
            key={label}
            text={label}
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
