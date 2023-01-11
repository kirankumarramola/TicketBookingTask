# TicketBookingTask
This is Ticket Booking System
Use  /register - to register your account by passing name email and password in params
Use /login - to generate jwt token in order to access other apis
Use /find - to get data of all theatres and movies
Use /search - to sort the theatre details by passing params like movieName = "Avatar 2" , theatreName = "PVR"
Use /show - to get only seats of the given show and movie by passing params like movieName = "Avatar 2", theatreName = "PVR" & ticket = "shows.06pm" or "shows.06pm.a2"
Use /available - to get seat numbers of available and booked separetly by passing params like movieName , theatreName  & ticket details
Use /update - to book tickets by passing params by passing theatreName, movieName & ticket details, it will book if the given seat number is available
To book ticket you need to login to your account so that it will email the ticket details
Use /insert - to insert theatre details to database as mentioned in theatreSchema
