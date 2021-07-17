import React from 'react';
import { useForm } from 'react-hook-form';
import { addTodoResolved } from '../validators/AddTodoSchema';
import { Controller, Input, Button, ScreenContainer } from '../components/Kit';

export type IAddTodoForm = {
  title: string;
  description: string;
};

export function AddTodoScreen() {
  const onSubmit = (data: IAddTodoForm) => {
    console.log(data);
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
        bold
      />
    </ScreenContainer>
  );
}
