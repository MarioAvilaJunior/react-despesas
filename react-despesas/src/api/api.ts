//import axiosObject from "axios";

//const axios = axiosObject.create({ baseURL: "http://localhost:3001" });

export interface IExpense {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

const getAllExpenses = async (
  month: string,
  sortParam: string
): Promise<IExpense[]> => {
  return fetch(
    `http://localhost:3001/despesas?mes=${month}&_sort=${sortParam}`
  ).then(responseHandler);
};

const responseHandler = (resp: Response) => {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
};

export { getAllExpenses };
