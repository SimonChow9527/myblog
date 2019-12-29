import actionTypes from "./actionTypes";

export function changeNavStatus(showNav){
    return {
        type:actionTypes.CHANGE_NAV_VISIBILITY,
        showNav:showNav
    }
}

export function setIsMobile(isMobile){
    return {
        type:actionTypes.IS_MOBILE,
        isMobile:isMobile
    }
}