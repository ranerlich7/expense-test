import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUseInfo } from "./userGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUseInfo()
  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType
  }) => {
    await addDoc(transactionCollectionRef,{
      userID,
      description,
      transactionAmount,
      createdAt: serverTimestamp()
    })
  }
  return {addTransaction}
};
