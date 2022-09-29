import { APIResponse } from "./Search";

export const mock: APIResponse = {
  count: 4,
  results: [
    {
      name: 'Leia Organa',
      url: 'https://swapi.dev/api/people/5/',
    },
    {
      name: 'Anakin Skywalker',
      url: 'https://swapi.dev/api/people/11/',
    },
    {
      name: 'Quarsh Panaka',
      url: 'https://swapi.dev/api/people/42/',
    },
    {
      name: 'Bail Prestor Organa',
      url: 'https://swapi.dev/api/people/68/',
    },
  ],
}

export const mockEmpty: APIResponse = {
    count: 0,
    results: [],
  }
