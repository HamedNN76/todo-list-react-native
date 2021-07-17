export type TTodoListItem = {
  _id: string;
  title: string;
  description: string;
  category: number;
};

export type TTodoListData = Array<TTodoListItem>;
