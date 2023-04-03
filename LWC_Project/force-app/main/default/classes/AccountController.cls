public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [Select Id, Name, Phone, Industry, Rating
                    FROM Account 
                    Order By createddate desc 
                    LIMIT 10];
    } 

    @AuraEnabled
    public static void updateAccount(String recordId){
        try {
            Account accRecord = new Account(Id = recordId);
            accRecord.Industry = 'Education';
            update accRecord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}