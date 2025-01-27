import { Genshin as Server } from "@/types/Server";
import { InvalidUID } from "@/errors/InvalidUID";

type Params = {
  uid: string;
};

export function getServer({ uid }: Params): Server {
  if (uid.startsWith("6")) {
    return Server.America;
  }

  if (uid.startsWith("7")) {
    return Server.Europe;
  }

  if (uid.startsWith("8") || uid.startsWith("18")) {
    return Server.Asia;
  }

  if (uid.startsWith("9")) {
    return Server.TW_HK_MO;
  }

  throw new InvalidUID("Masukkan UID yang valid");
}
