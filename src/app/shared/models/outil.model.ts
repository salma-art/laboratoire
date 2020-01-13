import { Deserializable } from "./deserializable.model";

export class Outil implements Deserializable{
    id: number;
    date: Date;
    source: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }