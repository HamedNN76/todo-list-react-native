import React from 'react';
import { useForm } from 'react-hook-form';
import { addTodoResolved } from '../validators/AddTodoSchema';
import {
  Controller,
  Input,
  Button,
  ScreenContainer,
  KeyboardAwareScrollView,
} from '../components/Kit';
import { useFetch } from '../hooks/useFetch';
import { StackNavigationProp } from '../navigation/Stack';
import { loadTodoSuccess } from '../redux/modules/todoList';
import { useAppDispatch } from '../hooks/store';
import { TTodoListData } from '../types/webServices/todoList';

export type AddTodoScreenProps = {
  navigation: StackNavigationProp<'AddTodo'>;
};

export type IAddTodoForm = {
  title: string;
  description: string;
};

export function AddTodoScreen(props: AddTodoScreenProps) {
  const { navigation } = props;

  const [createTodo, doCreateTodo] = useFetch<
    IAddTodoForm & { category: number },
    TTodoListData,
    undefined
  >('todoList.create');

  const dispatch = useAppDispatch();

  const onSubmit = (data: IAddTodoForm) => {
    doCreateTodo({
      form: {
        ...data,
        category: 2,
      },
      afterSuccess: (newTodoList) => {
        navigation.goBack();
        dispatch(loadTodoSuccess(newTodoList));
      },
    });
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IAddTodoForm>({
    resolver: addTodoResolved,
  });

  return (
    <ScreenContainer padding={[1, 2]} dismissKeyboard safeArea>
      <KeyboardAwareScrollView>
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
        <Button
          text="Add"
          onPress={handleSubmit(onSubmit)}
          bg="primary"
          block
          size="lg"
          typo="md"
          startIcon="plus"
          bold
          loading={createTodo.loading}
          disabled={createTodo.loading}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
}
