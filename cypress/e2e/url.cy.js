import fetchMock from 'fetch-mock';

describe('url', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // it('no request is made if the url is invalid', () => {
  //   cy.get('input').type('invalid url');
  //   expect(fetchMock.calls('*').length).to.equal(0);
  // });

  it('a request is made if the url is valid', () => {
    cy.get('input').type('tuta.io').then(() => {
      cy.log('input typed');
      expect(fetchMock.calls()).to.equal(1);
    });
    // cy.wait(2000);
    cy.log('calls:', fetchMock.calls);
  });

  // it('user input is throttled', () => {
  //   cy.visit('/');
  //   cy.get('input').type('invalid url');
  //   expect(fetchMock.calls(`/url/`).length).to.equal(0);
  // });
});
