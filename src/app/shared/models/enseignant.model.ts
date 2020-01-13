import { Membre } from "./member.model";
import { Deserializable } from "./deserializable.model";

export class EnseignantChercheur extends Membre implements Deserializable{
    grade: string;
    etablissement: string;
  }