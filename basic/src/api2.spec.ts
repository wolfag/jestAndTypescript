import axios from "axios";
import { MockAxios } from "../__mocks__/axios";

interface Person {
  id: number;
  name: string;
}

const mockAxios = (axios as unknown) as MockAxios;

describe("api", () => {
  const mockData: Person[] = [
    {
      id: 1,
      name: "wolfag",
    },
  ];

  it("get data", async () => {
    mockAxios.__setMockData(mockData);
    const res = await axios.get<Person[]>("/people");
    expect(res.data).toEqual(mockData);
  });

  it("get data", async () => {
    const mockData = "anything";
    mockAxios.__setMockData(mockData);
    const res = await axios.get<string>("/tasks");
    expect(res.data).toEqual(mockData);
  });
});
