function getConnection(){
    return {
        dbName : "TicketBookingSystem",
        collection : "Theatre",
        url : "mongodb+srv://kirankumarramola:KiranKumar%4006@cluster0.apvyog4.mongodb.net/TicketBookingSystem"
    };
    // return "mongodb+srv://kirankumarramola:KiranKumar%4006@cluster0.apvyog4.mongodb.net/TicketBookingSystem"
}
exports.con = {
    getConnection : getConnection,
};