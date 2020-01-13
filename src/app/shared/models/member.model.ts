import { Deserializable } from "./deserializable.model";

export class Membre implements Deserializable{
    id: number;
    cin: string;
    nom: string;
    prenom: string;
    date: Date;
    photo: number[];
    cv: string;
    email: string;
    password: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }