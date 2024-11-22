import screen from '../selector/screen'

describe('Pruebas para la pagina de inicio',{testIsolation:false}, () => {


    it('Ingresar a la página y verificar el título de la página',()=>{
        cy.visit('https://automationintesting.online/')
        cy.title().should('eq','Restful-booker-platform demo')   
   })

   it('Verificar la información del hotel',()=>{
       cy.get(screen.infoHotel.hotelName).contains('Shady Meadows B&B')
       cy.get(screen.infoHotel.hotelAddress).contains('The Old Farmhouse')
       cy.get(screen.infoHotel.hotelPhone).contains('012345678901')
       cy.get(screen.infoHotel.hotelEmail).contains('fake@fakeemail.com')
   })

   it('Verificar las imagenes visibles',()=>{
       cy.get(screen.logoImagen.logo).should('be.visible')
       cy.get(screen.roomsImagen.room).should('be.visible')
   })

   it('Validar el texto de bienvenida',()=>{
       cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows').should('exist')
   })

})
