public with sharing class ListApex {
    @AuraEnabled
    public static Void insertCombi(List<String> combi){
        Account account = new Account();   
        
        insert account;
    }
/*
    @AuraEnabled
    public static List<Account> getListCombi(){
        try{

        } catch (Exception e){
            throw new AuraHandledException(e.getMessage());

        }
    }
    */
}