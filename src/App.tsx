import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import { Layout } from "./Layout";
import { FaqList, FaqEdit, FaqCreate } from "./components/Faq";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { ua } from "./i18n/ua";
import { NewsCreate, NewsEdit, NewsList } from "./components/News";
import { LinkEdit, LinkList } from "./components/Links";
import { UsersList } from "./components/Users";
import { FabulasList } from "./components/Fabulas";
import { TypesCreate, TypesEdit, TypesList } from "./components/Types";
import { FabulasShow } from "./components/Fabulas/FabulasShow";
import { listWithoutHeadingDefaultProps } from "./components/common/styles/ListStyle";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC-NBVggdMMYavFHAD9zxEUqx6yje7FmQ",
  authDomain: "projector-app-86073.firebaseapp.com",
  databaseURL:
    "https://projector-app-86073-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projector-app-86073",
  storageBucket: "projector-app-86073.appspot.com",
  messagingSenderId: "707025164911",
  appId: "1:707025164911:web:46adfa75c6cfa61315cb9a",
};

const app = initializeApp(firebaseConfig);
getStorage(app);
getAuth(app);

const options = {
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
};
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig);

export const i18nProvider = polyglotI18nProvider(() => ua, "ua");

export const App = () => (
  <Admin
    layout={Layout}
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="faq"
      list={FaqList}
      create={FaqCreate({
        redirect: "list",
        children: undefined,
      })}
      edit={FaqEdit}
    />
    <Resource name="news" list={NewsList} create={NewsCreate} edit={NewsEdit} />
    <Resource
      name="links"
      list={LinkList(listWithoutHeadingDefaultProps)}
      edit={LinkEdit}
    />
    <Resource name="users" list={UsersList(listWithoutHeadingDefaultProps)} />
    <Resource
      name="fabulas"
      list={FabulasList}
      show={FabulasShow}
    />
    <Resource
      name="sexTypes"
      list={TypesList}
      edit={TypesEdit}
      create={TypesCreate}
    />
    <Resource
      name="genderTypes"
      list={TypesList}
      edit={TypesEdit}
      create={TypesCreate}
    />
  </Admin>
);
