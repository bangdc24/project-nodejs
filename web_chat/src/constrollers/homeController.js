let getHome = (req, res) => {
    return res.render("main/index");
};

let getMessenger = (req, res) => {
    return res.render("main/messenger");
};

module.exports = {
    getHome:getHome,
    getMessenger:getMessenger
};