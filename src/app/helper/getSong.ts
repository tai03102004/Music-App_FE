import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { dbFirebase } from "../fireBaseConfig";
import { ISongItem } from "../interfaces/ISongItem";

export const getSongList = async (max?: number, categoryId? : string) => {
    const songRef = ref(dbFirebase,"songs");
    let songQuery:any;
    if (!categoryId) {
      songQuery = songRef;
    } else {
      songQuery = query(songRef, orderByChild("categoryId"), equalTo(categoryId));
    }
  
    const result:ISongItem[] = await new Promise(
      (resolve) => {
        onValue(songQuery, (snapshot) => {
          let data:any[] = [];
          
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
  
            data.push({
              id : childKey,
              link : `/songs/${childKey}`,
              ...childValue
            })
  
          })
          if (max) {
            data= data.slice(0,max);
          }
          resolve(data);
        })
      }
    )
    return result;
  }

  export const getSongDetail = async (id : string) => {
    const songRef = ref(dbFirebase,"songs/" + id);
  
    const result:ISongItem[] = await new Promise(
      (resolve) => {
        onValue(songRef, (snapshot) => {
          const childKey = snapshot.key;
          const childValue = snapshot.val();
          if (childValue) {
            const data = {
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