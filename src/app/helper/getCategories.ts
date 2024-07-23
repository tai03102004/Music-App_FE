import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../fireBaseConfig";

export const getCategories = async (max?: number) => {
    const categoryRef = ref(dbFirebase,"categories");
  
    const result:any[] = await new Promise(
      (resolve) => {
        onValue(categoryRef, (snapshot) => {
          let data:any[] = [];
          
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
  
            data.push({
              id : childKey,
              link : `categories/${childKey}`,
              ...childValue
            })
  
          })
          if (max) {
            data = data.slice(0,max);
          }
          resolve(data);
        })
      }
    )
    return result;
}

export const getCategoryDetail = async (id: string) => {
  const categoryRef = ref(dbFirebase,"categories/" + id);

  const result:any[] = await new Promise(
    (resolve) => {
      onValue(categoryRef, (snapshot) => {
        const childKey = snapshot.key;
        const childValue = snapshot.val();
        if (childValue) {
          const data: any[] = {
            id : childKey,
            ...childValue
          }
          resolve(data);
        } else {
          resolve(null);
        }
      })
    }
  )
  return result;
}