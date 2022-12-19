# RelatedPaymentListShownInAccountPage
In this one, standard object's related list of custom object will be embed in standard object's record page. 

PS. This is apparently a techincal interview question for Salesforce Developer.

#Before Start
-	Create a new custom object called “Payment” having fields: 
Field Name          Field Type        Values
Payment Type*       Picklist          Service, Product, Other
Amount*             Currency          
Due Date*           Date              
Notes               Text Long         

* means a required field.

- Create a relationship between Account and Payment__c object.
/*This asks for reasoning of choice on the type of relationship. I choose Master-Detail because of two reasons
First one is that payment means financial and financial data should be private to Account owner/team. So, Master-Detail
relationship will allow payment records to inherit share and visibility settings of Account and cascading life form. 
Second one is that Data Collection will be easier since SOQL query can give me flat data.*/

- Create a custom Aura Component called "CustomPaymentList" that will:
1)Display a list of Payments that are tied to an account
2)The component should live in Account page.
3)The component should show the field of the Payment records: Payment Type, Amount, Due Date, Created By, Created Date.
P.S. Apex Controller Name should be "Payment Controller" and Test Class name should be "PaymentController_Test"
