export interface Product
{
  id?: number;
  name: string;
  count: number;
  category: string;
  description: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
}
