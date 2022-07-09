import { z } from 'zod';

export const MenuTypeOptions: string[] = ['pizza', 'burger', 'noodle', 'drink', 'salad'];
export const MenuTypeSchema = z.enum(['pizza', 'burger', 'noodle', 'drink', 'salad']);

export type MenuType = z.infer<typeof MenuTypeSchema>;

export type Menu = {
  id: string;
  type: MenuType;
  name: string;
  description: string;
  price: string;
  rating: number;
  avatar: string;
  photo: string;
}

export type Recommended = {
  id: string;
  rating: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export type PostMetaData = {
  id: string;
  title: string;
  subtitle: string;
  createdAt: string;
  thumbnail: string;
  photo: string;
}

export type PostContent = Array<string>;
