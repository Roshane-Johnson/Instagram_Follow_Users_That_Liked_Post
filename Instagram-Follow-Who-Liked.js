/*
 * This a modified version of Twitter Intrest Remover (gitlink) to serve as an alternative
 * rather than sitting down and hitting the follow button over and over.
 * 
 * !! THIS IS A USE AT YOUR OWN RISK SCRIPT !!
 * 
 * I'm not resposible if this damages your account in anyway, this made a daily task
 * easier for me so I decided to share it with the community.
 */


"use strict;"

var labelSelector = "html.js.logged-in.client-root.js-focus-visible.sDN5V body div.RnEpo.Yx5HN div.pbNvD.fPMEg div._1XyCr div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd div div div.Igw0E.rBNOH.eGOV_.ybXk5._4EzTm.XfCBB.HVWg4 div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl button.sqdOP.L3NKy.y3zKF"

var users = Array.from(document.querySelectorAll(labelSelector));

console.log(`${users.length} total users found`);

var checkedUsers = 0;

console.log(`Starting…`);

/*
 * Setting an interval to not seem suspicious to instagram.
 * I honestly don't know if this method actually delays an operation.
 * So if anyone has a better solution feel free to make a pull request.
 */

users.forEach((follow) => {
     // checkedUsers < 45 is here incase your browser can render more than 45 users at once.
    if (!follow.clicked && checkedUsers < 45) {
        checkedUsers++;
        setTimeout(follow.click(), 2000); // <<< This is what the comment below console.log(`Starting…`) refers to.
        console.log(`${checkedUsers} of ${users.length}`);
    }

});

console.log(`Finished`);