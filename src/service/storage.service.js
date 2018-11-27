import { AsyncStorage } from 'react-native';


/**
 * set data in localstorage functionality 
 * @param { Object } data 
 * @param { KeyName } data.KeyName
 * @param { KeyData } data.KeyData
 */ 
export const setkey_data = (data)=> AsyncStorage.setItem(data['KeyName'] , data['KeyData'])

/**
 * get data from localstorage functionlity 
 * @param { Object } data
 * @param { KeyName } data.KeyName 
 */ 

export const getkey_data = (data)=> AsyncStorage.getItem(data['KeyName'])

/**
 * delete data from localstorage functionality 
 * @param { Object } data 
 * @param { KeyName } data.KeyName
 */ 
export const deletekey_data = (data)=> AsyncStorage.removeItem(data['KeyName']);

/**
 * clear local history functionality 
 * **/ 
export const clearhistory = ()=> AsyncStorage.clear();  