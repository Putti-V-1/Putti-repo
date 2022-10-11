
import { ref, get, child } from 'firebase/database';


function setRides(){
    get(child(ref(global.db), `users/${global.user["id"]}/rides`)).then((snapshot) => {
        global.myRides = []
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                global.myRides.push(item)
            });
        }
    })
    get(child(ref(global.db), "rides")).then((snapshot) => {
        global.allRides = []
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                global.allRides.push(item)
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
