describe('my app', () => {

  it('can select/add products to the cart and then checkout', () => {
      cy.visit('http://localhost:3000')
      
      //Add first item
      cy.findByRole('heading', {  name: /miracle facial oil/i}).click();
      cy.findByRole('button', {  name: /add to cart/i}).click();
      cy.findByRole('button', {  name: /added to cart!/i});
      cy.findByRole('link', {  name: /1/i});
      cy.findByRole('button', {  name: /go back/i}).click();

      // Add second item
      cy.findByRole('heading', {  name: /bio\-retinol \+ c skin booster/i}).click();
      cy.findByRole('button', {  name: /add to cart/i}).click();
      cy.findByRole('button', {  name: /added to cart!/i});
      cy.findByRole('link', {  name: /2/i});
      cy.findByRole('button', {  name: /go back/i}).click();

      // Add third item
      cy.findByRole('heading', {  name: /blossom oil/i}).click();
      cy.findByRole('button', {  name: /add to cart/i}).click();
      cy.findByRole('button', {  name: /added to cart!/i});
      cy.findByRole('link', {  name: /3/i});

      // Checkout
      cy.findByRole('link', {  name: /3/i}).click();
      cy.findByRole('link', {  name: /checkout/i}).click();
      cy.findByRole('heading', {  name: /your cart 3/i});
      cy.findByText(/total \(gbp\)/i).should("be.visible");
  })
})