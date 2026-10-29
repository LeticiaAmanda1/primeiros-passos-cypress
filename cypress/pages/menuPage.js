class menuPage {

   selectorsList() {
      const selectors = {
         myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
         perFormanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
      }

        return selectors
    }
       accessMyInfo(){
        
        cy.get(this.selectorsList().myInfoButton).click()
       }

       acessPerformance(){

        cy.get(this.selectorsList().perFormanceButton).click()
       }
}


export default menuPage 