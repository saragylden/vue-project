describe('WelcomeItem Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('displays documentation section correctly', () => {
      cy.contains('Documentation').should('be.visible')
      cy.contains('Vue’s').should('be.visible')
      cy.contains('official documentation').should('be.visible')
      cy.contains('a', 'official documentation').should('have.attr', 'href', 'https://vuejs.org/')
    })
  
    it('displays tooling section correctly', () => {
      cy.contains('Tooling').should('be.visible')
      cy.contains('This project is served and bundled with').should('be.visible')
      cy.contains('VSCode').should('be.visible')
      cy.contains('Volar').should('be.visible')
      cy.contains('Cypress').should('be.visible')
      cy.contains('Cypress Component Testing').should('be.visible')
      cy.contains('a', 'Cypress').should('have.attr', 'href', 'https://www.cypress.io/')
    })
  
    it('displays ecosystem section correctly', () => {
      cy.contains('Ecosystem').should('be.visible')
      cy.contains('Get official tools and libraries for your project:').should('be.visible')
      cy.contains('Pinia').should('be.visible')
      cy.contains('Vue Router').should('be.visible')
      cy.contains('Vue Test Utils').should('be.visible')
      cy.contains('Vue Dev Tools').should('be.visible')
      cy.contains('Awesome Vue').should('be.visible')
      cy.contains('a', 'Pinia').should('have.attr', 'href', 'https://pinia.vuejs.org/')
    })
  
    it('displays community section correctly', () => {
      cy.contains('Community').should('be.visible')
      cy.contains('Got stuck? Ask your question on').should('be.visible')
      cy.contains('Vue Land').should('be.visible')
      cy.contains('StackOverflow').should('be.visible')
      cy.contains('our mailing list').should('be.visible')
      cy.contains('@vuejs').should('be.visible')
      cy.contains('a', '@vuejs').should('have.attr', 'href', 'https://twitter.com/vuejs')
    })
  
    it('displays support Vue section correctly', () => {
      cy.contains('Support Vue').should('be.visible')
      cy.contains('As an independent project, Vue relies on community backing').should('be.visible')
      cy.contains('becoming a sponsor').should('be.visible')
      cy.contains('a', 'becoming a sponsor').should('have.attr', 'href', 'https://vuejs.org/sponsor/')
    })
  })
  