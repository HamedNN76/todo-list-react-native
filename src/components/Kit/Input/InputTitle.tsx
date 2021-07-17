import React from 'react';
import { Text } from '../Text';
import { Card } from '../Card';

export type InputTitleProps = {
  title?: string;
  required?: boolean;
};

export function InputTitle(props: InputTitleProps): JSX.Element {
  const { title } = props;

  const titleElement = title ? (
    <Text color="primaryText" typo="md" medium>
      {title}
    </Text>
  ) : null;

  return (
    <Card
      _width="100%"
      flexDirection="row"
      alignItems="center"
      padding={[0, 0, 1, 0.5]}
    >
      {titleElement}
    </Card>
  );
}
