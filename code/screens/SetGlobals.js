
import { ref, get, child } from 'firebase/database';


function setRides(){
    get(child(ref(global.db), `users/${global.user["id"]}/rides`)).then((snapshot) => {
        global.myRideIds = [];
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                myRideIds.push(item);
            });
        }
    })
    get(child(ref(global.db), `users/${global.user["id"]}/bookedRides`)).then((snapshot) => {
        global.BookedIds = [];
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                BookedIds.push(item);
            });
        }
    })
    get(child(ref(global.db), "rides")).then((snapshot) => {
        global.myRides = [];
        global.allRides = [];
        global.bookedRides = [];
        if (snapshot.exists()) {
            snapshot.forEach(function(item) {
                global.allRides.push(item);
                if(myRideIds.includes(item.child("id"))){
                    global.myRides.push(item);
                }
                if(BookedIds.includes(item.child("id"))){
                    global.bookedRides.push(item);
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
