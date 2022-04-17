import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import { FirebaseDataProvider, RAFirebaseOptions } from "react-admin-firebase";
import { SiteList } from "./SiteList";
import { SiteShow } from "./SiteShow";
import { SiteEdit } from "./SiteEdit";
import { SiteCreate } from "./SiteCreate";
import { updateRecord, createRecord} from "./FIREBASE_CONFIG";
const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: false,
  watch: ["sites"],
};

let dataProvider = FirebaseDataProvider(config, options);
dataProvider = {
  ...dataProvider,
  // @ts-ignore
  update: async (resource: string, params) => {
    const response = await updateRecord(resource, params.data.id, params.data);

    return response;
  },
  create: async (resource: string, params) => {
    const response = await createRecord(resource, params.data);
    return response; 
  }
};
const ReactAdmin = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="sites"
        list={SiteList}
        edit={SiteEdit}
        show={SiteShow}
        create = {SiteCreate}
      />
    </Admin>
  );
};

export default ReactAdmin;
