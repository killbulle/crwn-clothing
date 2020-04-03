import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from './firebase.config';


firebase.initializeApp(config);
export const auth = firebase.auth();
export const store = firebase.firestore();
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

export interface ExtraData {
    displayName: string;
}


export async function createUserProfile(userAuth: firebase.User | null, data: ExtraData): Promise<firebase.firestore.DocumentReference
    | void> {
  if (!userAuth) return;
  console.log(data);
  const userRef: firebase.firestore.DocumentReference = store.doc(`users/${userAuth.uid}`);
  const snapshot: firebase.firestore.DocumentSnapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = userAuth;
    const createAt: Date = new Date();
    try {
      await userRef.set({
        displayName, email, createAt, ...data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
}
