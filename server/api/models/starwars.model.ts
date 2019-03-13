import {Instance, ObjectID, Collection} from 'iridium';


/**
 * Starwars People API Response Model
 */
export interface PeopleInterface {
  _id?: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: PlanetInterface;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

/**
 * Starwars Planet API Response Model
 */
export interface PlanetInterface {
  _id?: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

@Collection('people')
export class People extends Instance<PeopleInterface, People> implements PeopleInterface {
  @ObjectID _id: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: PlanetInterface;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export class Planet extends Instance<PlanetInterface, Planet> implements PlanetInterface {
  @ObjectID _id: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}