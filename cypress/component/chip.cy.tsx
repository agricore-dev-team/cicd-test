import Chip from "@/src/components/chip";
import "@/src/app/globals.css";

describe('Chip component test', () => {
  it('should render the chip with the correct label', () => {
    cy.mount(<Chip label="Test Chip" />);
    cy.contains("Test Chip");
  })
})