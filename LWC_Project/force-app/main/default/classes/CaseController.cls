public with sharing class CaseController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(){
        List<Case> caseList = [Select Id, Subject, Description, Status, Origin from Case];
        return caseList;
    }
}