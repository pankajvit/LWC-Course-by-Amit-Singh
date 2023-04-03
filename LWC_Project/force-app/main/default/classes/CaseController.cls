public with sharing class CaseController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(String subject){
        String key = '%' + subject + '%';
        List<Case> caseList = [Select Id, Subject, Description, Status, Origin 
                                from Case
                                Where Subject LIKE :key];
        /*


        */
        return caseList;
    }
}