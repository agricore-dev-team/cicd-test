import Button from '../../src/components/button';
import "@/src/app/globals.css";

describe('Button component test', () => {
  it('should render the button with the correct text and handle click event', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button id="test-button" text="Click Me" onClick={onClickSpy} />);

    cy.get("#test-button").click();

    cy.get('@onClickSpy').should('have.been.calledOnce');
  })
})