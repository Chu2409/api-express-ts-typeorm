export enum gases {
  ELECTRIC = "electric",
  GASOLINE = "gasoline",
}

export interface CarInterface {
  name: string;

  color: string;

  gas: gases;

  year: number;

  description: string;

  price: number;
}
