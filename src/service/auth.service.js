import {auth , database  }  from 'react-native-firebase';


let _auth = auth();
let datadb = database();

/**
 * 
 * @param {*Object} data
 * @param { Key } data.email
 * @param { Key } data.password
 */ 
export const loginUser = (data) => _auth.signInWithEmailAndPassword(data['email'],data['password'])

/**
 * 
 * @param {*Object} data
 * @param { Key } data.email
 * @param { Key } data.password 
 */ 
export const createAccount = (data) => _auth.createUserWithEmailAndPassword(data['email'],data['password'])


export const resetPassword = (data) => _auth.confirmPasswordReset()


/**
 * 
 * @param {*Key} Id 
 */ 
export const checkUser = (Id) => {
    return new Promise((resolve , reject)=>{
        datadb.ref('users').child(Id).on('value',(res)=>{
            if(res) resolve(res.val());
        })
    })
}
