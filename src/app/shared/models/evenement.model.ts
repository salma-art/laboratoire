import { Deserializable } from "./deserializable.model";

export class Evenement implements Deserializable{
    id: number;
    date: Date;
    lieu: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }