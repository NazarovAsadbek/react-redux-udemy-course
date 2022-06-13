export class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(this._apiBase + url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const {results} = await this.getResource(`/people/`)
    return results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }

  getAllPlanets() {
    return this.getResource(`/planets/`)
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  getAllStarships() {
    return this.getResource(`/starships/`)
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }
}
