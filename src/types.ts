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
  avatar: string;
  photo: string;
}