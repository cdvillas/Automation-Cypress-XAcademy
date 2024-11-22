class screen{

    infoHotel ={
        hotelName: '.contact > :nth-child(3) > :nth-child(1)', 
        hotelAddress: '.contact > :nth-child(3) > :nth-child(2)', 
        hotelPhone: '.contact > :nth-child(3) > :nth-child(3)', 
        hotelEmail: '.contact > :nth-child(3) > :nth-child(4)', 
    }

    logoImagen = {
        logo :'.hotel-logoUrl'        
    }

    roomsImagen = {
        room :'.img-responsive'
    }

    welcomeText = {
        texto : '.col-sm-10 > p'
    }

}

module.exports = new screen();