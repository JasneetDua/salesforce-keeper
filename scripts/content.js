// es import not yet supported in content scripts.
// update should be in const file
const CONSTANTS = {
    GET_ORG_ID: 'GetOrgId'
};

// general utils
const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const getOrgIdFromCookie = () => {
    var sid = getCookie('sid');
    var orgId = sid ? sid.split('!')[0] : null;
    return orgId;
}

// general utils ends here

const messageHandler = (request, sender, sendResponse) => {
    if (request.action == CONSTANTS.GET_ORG_ID) {
        const orgId = getOrgIdFromCookie();
        sendResponse(orgId);
    }
}

// will listen for message on runtime
chrome.runtime.onMessage.addListener(messageHandler);