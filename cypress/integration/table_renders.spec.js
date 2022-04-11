describe("Table populated from API call", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get("#dyn-row").should("exist")
    })
})