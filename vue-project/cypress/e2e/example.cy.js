describe('Greetings Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/') // Assuming your Vue app starts at the root URL
    })
  
    it('displays the greeting message', () => {
      cy.contains('h1', 'Hello World').should('be.visible')
    })
  
    it('displays the framework links', () => {
      cy.contains('a', 'Vite').should('have.attr', 'href', 'https://vitejs.dev/')
      cy.contains('a', 'Vue 3').should('have.attr', 'href', 'https://vuejs.org/')
    })
  
    it('allows typing in the input field', () => {
      const typedText = 'Hello, Cypress!'
      cy.get('input').type(typedText).should('have.value', typedText)
    })
  
    // Add more tests as needed...
  })
  