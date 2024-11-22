import login from '../selector/login'

describe('Pruebas para la página de inicio de sesión',{testIsolation:false}, () => {

    var losDatos;

    it('Ingresar a la página',()=>{
         cy.visit('https://automationintesting.online/') 
         cy.fixture('./userOk')
            .then(elTest => {
              losDatos = elTest; 
        })  
    })

    it('Completar el formulario',()=>{
        
            cy.escribir(login.form.name, losDatos.name )
            cy.escribir(login.form.email, losDatos.email)
            cy.escribir(login.form.phone, losDatos.phone)
            cy.escribir(login.form.subject, losDatos.subject)
            cy.escribir(login.form.message, losDatos.message)
            cy.wait(2000)
        
            cy.miClick(login.form.buttonSubmit)
            cy.asersion(login.form.msj,'Thanks for getting in touch Carloh!')
         
        })
        
    })
