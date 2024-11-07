# Week 11 - Recoil deep dive

## What is Recoil?

Recoil is a state management library for React. It is a replacement for useState and useReducer. It is built on top of the **React Context API** and uses **hooks** ( useRecoilValue, useSetRecoilState, useRecoilState ) under the hood.

- #### what is useState and useReducer?

  useState and useReducer are hooks that allow you to add state to your components.

  - useState
    - used for simple state managment in a component it is used where we dont need multiple updates in sequence.
  - useReducer
    - used for more complex state management in a component it is used where we need multiple updates in sequence.
    - not cool so not searching about it more.

## Why do we need Recoit when we have useState and useReducer?

- Global state managment
- Scalability
- Recoil automatically re-renders only components that depends on specific atom. Optimizing performance in large applications.

## If this is based on context API why not use Context API directly?

- Context API re-renders entire component tree and the recoil uses atoms and re-renders only the components that depends on the atom.
- Context API can require a lot of boilerplate code. which is not good for large applications.

### useRecoilValue

- this is a hook that returns the value of the atom.

### useSetRecoilState

- this is a hook that returns a function that can be used to update the value of the atom.

### useRecoilState

- this is a hook that returns a function that can be used to update the value of the atom and also returns the value of the atom.
