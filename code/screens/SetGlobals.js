
import { ref, get, child } from 'firebase/database';


function setRides(){
    get(child(ref(global.db), `users/${global.user["id"]}/rides`)).then((snapshot) => {
        myRideIds = [];
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                myRideIds.push(item);
            });
        }
    })
    get(child(ref(global.db), "rides")).then((snapshot) => {
        global.myRides = [];
        global.allRides = [];
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                global.allRides.push(item);
                if(myRideIds.includes(item.child("id"))){
                    global.myRides.push(item);
                }
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
