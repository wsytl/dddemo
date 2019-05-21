export function isObject(obj) {//合法对象
    if (obj == null || obj == undefined || obj == '' || obj == '<null>'){
        return false
    }
    return true
}

export function jsonObject(obj,returnObject) {
    if (isObject(obj) === true){
        return obj
    }else {
        return returnObject
    }
}

export function isInt(obj) {
    if (obj.isInteger(obj)){
        return true
    }else {
        return false
    }
}
