# Welcome to TodoList React Native project

This is a simple Todo List App based on React Native.

## Make it run

After cloning project, install dependencies with `yarn` command,
Then execute `yarn android` for android and `yarn ios` for ios.

# Source Directories

1.  components
2.  hooks
3.  navigation
4.  redux
5.  screens
6.  stylesheet
7.  types
8.  utils
9.  validators

## components

- Kit: Styled-components UI library
- Navigation: Components for react-navigation
- TodoList

## hooks

- store: Store useSelector and useDispatch
- useFetch: fetch hook for make api call

## navigation

Stack Navigation configuration

## redux

- modules: include each redux reducer with actions
- reducer: combined reducers
- saga: all saga watchers inside root saga
- store: store configuration

## screens

Includes all the screens in stack navigator

## stylesheet

colors, font-sizes (typography), border-radius (curves), flex, space, styled component style setter (styled) and theme (but not implemented in UI).

## types

Global typescript types and interfaces

## utils

Global functionalities such as alert, fetch and keyboard.

## validators

RegExps, yup schemas for form and customized yup validators.
