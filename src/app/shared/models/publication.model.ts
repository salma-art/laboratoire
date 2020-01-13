import { Deserializable } from "./deserializable.model";

export class Publication implements Deserializable{
    id: number;
    type: string;
    lien: string;
    date: Date;
    sourcePdf: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }