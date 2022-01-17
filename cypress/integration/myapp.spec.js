describe('my app', () => {

  it('can select multiple products and add to the cart', () => {
      cy.visit('http://localhost:3000')
      
      //Add first item
      cy.findByRole('heading', {  name: /miracle facial oil/i}).click()
      
      cy.findByRole('button', {  name: /add to cart/i}).click()

      cy.findByRole('cell', {  name: /miracle facial oil/i})

      cy.findByRole('link', {  name: /home/i}).click()

      //Add second item

      cy.findByRole('heading', {  name: /hydronic serum 200/i}).click()

      cy.findByRole('button', {  name: /add to cart/i}).click()

      cy.findByRole('cell', {  name: /hydronic serum 200/i})

      cy.findByRole('link', {  name: /home/i}).click()

      //Add third item

      cy.findByRole('heading', {  name: /bio\-retinol \+ c skin booster/i}).click()

      cy.findByRole('button', {  name: /add to cart/i}).click()

      cy.findByRole('cell', {  name: /bio\-retinol \+ c skin booster/i})

  })
})