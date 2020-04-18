import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './firebase.config';
import { ExtraData } from '../redux/User/User-types';
import { Item } from '../redux/ShopData/Item';
import { Category, ShopData } from '../redux/ShopData/shopdata-action';

type QuerySnapshot = firebase.firestore.QuerySnapshot;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

firebase.initializeApp(config);
export const auth = firebase.auth();
export const fstore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export async function signInWhithGoogle() {
  try {
    const userCredential = await auth.signInWithPopup(provider);
    console.log(`logged with${userCredential}`);
  } catch (e) {
    console.log(e);
  }
}

export default firebase;

type Dref = firebase.firestore.DocumentReference;

export async function createUserProfile(
  userAuth: firebase.User | null,
  data: ExtraData
): Promise<Dref | void> {
  if (!userAuth) return;
  console.log(data);
  const userRef: Dref = fstore.doc(`users/${userAuth.uid}`);
  const snapshot: firebase.firestore.DocumentSnapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = userAuth;
    const createAt: Date = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
}

// FIXME POURRIS on aurait du partir du type de base de donnée et type les retours
export const addCollectionsAndDocuments = async (
  collectionKey: string,
  objectsToAdd: object[]
) => {
  const colRef = fstore.collection(collectionKey);
  const writeBatch = fstore.batch();
  objectsToAdd.forEach((obj) => {
    const docRef = colRef.doc();
    writeBatch.set(docRef, obj);
  });
  return writeBatch.commit();
};

export const getShopData = (arrays: Category[]) =>
  arrays.reduce((accumulator: ShopData, data) => {
    const key = data.title.toLowerCase() as keyof ShopData;
    accumulator[key] = data;
    return accumulator;
  }, {} as ShopData);

export async function getdataFromFirebase(
  snapshot: QuerySnapshot
): Promise<ShopData> {
  const categories = await snapshot.docs.map(
    (doc: QueryDocumentSnapshot): Category => {
      const data = doc.data();
      const { title } = data;
      return {
        routeName: encodeURI(title.toLowerCase()),
        title,
        id: doc.id,
        items: data.items as Item[],
      } as Category;
    }
  );
  return getShopData(categories);
}
