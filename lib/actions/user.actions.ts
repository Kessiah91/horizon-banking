'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
     try {

     } catch (error) {
        console.error('Error', error);
     }
}
export const signUp = async (userData: SignUpParams) => {
   const { email, password, firstName, lastName } = userData;

     try {
      const { account } = await createAdminClient();

      // Create the email password session
      const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
      
      const session = await account.createEmailPasswordSession(email, password);
    
      // Set the session cookie
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        sameSite: "strict",
        secure: true,
        httpOnly: true,
      });

      return parseStringify(newUserAccount);
     } catch (error) {
        console.error('Error', error);
     }
}

export async function getLoggedInUser() {
   try {
      const { account } = await createSessionClient();
      return await account.get();
   } catch (error) {
      return null;   
   }
}