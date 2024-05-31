export interface MENU_ITEM{
    icon:string,
    label:string,
    route?:string
}
export interface PARTY{
    Id:string |any
    name:string,
    company_name:string,
    mobile_no:string,
    telephone_no:string,
    whatsapp_no:string,
    email:string,
    remark:string,
    login_access:boolean,
    date_of_birth:string,
    anniversary_date:string,
    gstin:string,
    pan_no:string,
    apply_tds:boolean,
    credit_limit:number,
    bank_ifsc_code:string,
}
export interface BANK {
    bank_ifsc_code:string,

}

 export const Data=[
    {
        "Id": "12",
        "name": "Test",
        "company_name": "Test Company",
        "mobile_no": "1234567814",
        "telephone_no": "1234567890",
        "whatsapp_no": "1234567890",
        "email": "abc@gmai.com",
        "remark": "Test",
        "login_access": true,
        "date_of_birth": "2024-12-12",
        "anniversary_date": "2024-12-12",
        "gstin": "ABCDE1234511",
        "pan_no": "ABCD1234",
        "apply_tds": true,
        "credit_limit": 123,
        "bank_ifsc_code" :"HDFC53D"
       
    },
    {
        "Id": "13",
        "name": "Test Data ",
        "company_name": "Test Company",
        "mobile_no": "1234567814",
        "telephone_no": "1234567890",
        "whatsapp_no": "1234567890",
        "email": "ght@gmai.com",
        "remark": "Test",
        "login_access": true,
        "date_of_birth": "2024-12-12",
        "anniversary_date": "2024-12-12",
        "gstin": "ABCDE1234511",
        "pan_no": "ABCD1234",
        "apply_tds": true,
        "credit_limit": 123,
        "bank_ifsc_code" :"HDFC53D"
    },
    {
        "Id": "53",
        "name": "Test data 2 ",
        "company_name": "Test Company",
        "mobile_no": "1234567814",
        "telephone_no": "1234567890",
        "whatsapp_no": "1234567890",
        "email": "ght@gmai.com",
        "remark": "Test",
        "login_access": true,
        "date_of_birth": "2024-12-12",
        "anniversary_date": "2024-12-12",
        "gstin": "ABCDE1234511",
        "pan_no": "ABCD1234",
        "apply_tds": true,
        "credit_limit": 123,
        "bank_ifsc_code" :"HDFC53D"
    }
]