
import { ref, get, child } from 'firebase/database';


function setRides(){
    get(child(ref(global.db), `users/${global.user["id"]}/rides`)).then((snapshot) => {
        global.rides = []
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                global.rides.push(item)
            });
        }
    })
}


export function SetGlobals (){
    get(child(ref(global.db), `users/${global.user["uid"]}`)).then((snapshot) => {
        if (snapshot.exists()) {
            global.user = snapshot.val();
        }else{
            stackNav.replace("login")
        }
    }).then(setRides);    
}
