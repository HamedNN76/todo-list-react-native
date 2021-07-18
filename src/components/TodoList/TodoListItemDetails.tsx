import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/store';
import { useFetch } from '../../hooks/useFetch';
import { goBack } from '../../navigation/navigation';
import { loadTodoSuccess } from '../../redux/modules/todoList';
import { colors } from '../../stylesheet';
import { TTodoListData, TTodoListItem } from '../../types/webServices/todoList';
import { setVariables } from '../../utils/fetch';
import { editTodoResolved } from '../../validators/EditTodoSchema';
import { Button, Card, Controller, Input, Picker } from '../Kit';
import { InputTitle } from '../Kit/Input/InputTitle';
import { filters } from './TodoListFilter';

export type TodoListItemDetailsProps = {
  item: TTodoListItem;
};

export type IEditTodoForm = {
  title: string;
  description: string;
  category: number;
};

export function TodoListItemDetails(props: TodoListItemDetailsProps) {
  const { item } = props;

  const [deleteState, doDelete] = useFetch<undefined, TTodoListData, undefined>(
    'todoList.delete'
  );
  const [editState, doEdit] = useFetch<undefined, TTodoListData, undefined>(
    'todoList.edit'
  );
  const dispatch = useAppDispatch();

  const afterSuccess = useCallback(
    (data) => {
      goBack();
      dispatch(loadTodoSuccess(data));
    },
    [dispatch]
  );

  const handleDelete = useCallback(() => {
    setVariables({ todoListId: item._id });
    doDelete({
      afterSuccess,
    });
  }, [doDelete, afterSuccess, item._id]);

  const onSubmit = (data: IEditTodoForm) => {
    setVariables({ todoListId: item._id });
    doEdit({
      form: data,
      afterSuccess,
    });
  };

  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    watch,
  } = useForm<IEditTodoForm>({
    resolver: editTodoResolved,
    defaultValues: {
      title: item.title,
      description: item.description,
      category: item.category,
    },
  });

  const { category } = watch();

  return (
    <Card>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors?.title?.message}
            value={value}
            title="Title"
            placeholder="Todo title..."
            required
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="next"
            blurOnSubmit={false}
            iconName="plus"
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors?.description?.message}
            value={value}
            title="Description"
            placeholder="Todo description..."
            required
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="done"
            blurOnSubmit={false}
            iconName="list"
          />
        )}
      />
      <Card>
        <InputTitle title="Category" />
        <Card border curve margin={[0, 0, 2, 0]}>
          <Picker
            selectedValue={category}
            onValueChange={(_value, index) => setValue('category', index)}
          >
            {filters.map((filter, i) => (
              <Picker.Item
                key={filter.label}
                label={filter.label}
                value={i}
                color={colors[filter.bg]}
              />
            ))}
          </Picker>
        </Card>
      </Card>
      <Button
        text="Edit"
        onPress={handleSubmit(onSubmit)}
        bg="primary"
        block
        size="lg"
        typo="md"
        startIcon="edit"
        iconSize={3}
        bold
        loading={editState.loading}
        disabled={editState.loading}
      />
      <Button
        block
        typo="md"
        startIcon="trash"
        bg="failure"
        color="white"
        iconSize={3}
        text="Delete"
        onPress={handleDelete}
        loading={deleteState.loading}
        disabled={deleteState.loading}
        margin={[3, 0, 0, 0]}
      />
    </Card>
  );
}
