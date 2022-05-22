import { listUser } from '../data/listUser';
import { User } from '../types/user';

export const getUser = (id: string) => {
  let index: number | null = null;
  let currentUser: User | null = null;

  listUser.forEach((user, idx) => {
    if (user.id === id) {
      currentUser = { ...user };
      index = idx;
    }
  });

  return { user: currentUser, index };
};

export const createUser = (user: Omit<User, 'id'>) => {
  const id = listUser.length.toString();
  listUser.push({ ...user, id });
  return id;
};

export const upDateUser = (upDatedUser: User) => {
  const { user, index } = getUser(upDatedUser.id);
  if (user && index) listUser[index] = { ...user, ...upDatedUser };
  return user.id;
};

export const deleteUser = (id: string) => {
  const { user, index } = getUser(id);
  if (user && index) listUser[index] = { ...user, isDeleted: true };
  return user.id;
};
