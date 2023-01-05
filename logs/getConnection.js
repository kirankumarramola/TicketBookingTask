async function con(){
    return {
        dbName : "TicketBookingSystem",
        collection : "Theatre",
        url : "mongodb+srv://kirankumarramola:KiranKumar%4006@cluster0.apvyog4.mongodb.net/TicketBookingSystem"
    };
}
exports.getConnection = {
    con : con,
};