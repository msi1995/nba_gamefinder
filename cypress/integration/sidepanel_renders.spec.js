describe("Side panel populated from API call on row click", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get("#dyn-row").click()
        cy.get("#api-check").should("exist")
    })
})