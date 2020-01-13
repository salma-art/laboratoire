import { Membre } from "./member.model";
import { Deserializable } from "./deserializable.model";

export class Etudiant extends Membre implements Deserializable{
    dateInscription: Date;
    diplome: string;

  }