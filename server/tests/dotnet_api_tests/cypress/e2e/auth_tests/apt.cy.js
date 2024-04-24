


describe('API Testing', () => {
    it('should successfully retrieve user data', () => {
      cy.request('GET', 'http://localhost:5206')
        .then((response) => {
          expect(response.status).to.equal(200)
        })
    })
  })