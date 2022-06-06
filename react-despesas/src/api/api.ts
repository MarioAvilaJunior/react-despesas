//import axiosObject from "axios";

//const axios = axiosObject.create({ baseURL: "http://localhost:3001" });

export interface IExpense {
id: number,
descricao: string,
categoria: string,
valor: number,
mes: string,
dia: string
}

/*const getAllExpenses = async (): Promise<IExpense[]> => {
  const { data } = await axios.get<IExpense[]>("/despesas");
  return data.sort((a, b) => a.id - b.id);
};*/

const getAllExpenses = (
    month: string,
    sortParam: string
  ): Promise<IExpense[]> => {
    return fetch(
        `http://localhost:3001/despesas?mes=${month}&_sort=${sortParam}`,
    ).then(responseHandler);
  };

  const responseHandler = (resp: Response) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(resp.statusText);
    }
  };

/*
const getAllCandidates = async (): Promise<ICandidate[]> => {
  const { data } = await axios.get<ICandidate[]>("/candidates");
  return data;
};

const getElectionFrom = async (cityId: string): Promise<IElection[]> => {
  const { data } = await axios.get<IElection[]>(`/election?cityId=${cityId}`);
  return data.sort((a, b) => b.votes - a.votes);
}; */

export { getAllExpenses };