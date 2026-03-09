// Cấu hình chung cho API KiotViet
const API_CONFIG = {
    baseUrl: "https://api-man1.kiotviet.vn/api",
    apiVersion: "5",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IndYYSJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjoxOTIyMjYsImlhdCI6MTc3MzAyNzQxOCwiZXhwIjoxNzc1NDQ2NjE4LCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsInJvbGVzIjpbIlVzZXIiXSwia3Zzb3VyY2UiOiJSZXRhaWwiLCJrdnVzZXRmYSI6MCwia3Z3YWl0b3RwIjowLCJrdnNlcyI6ImY4ODE5ZTRlYzQ5YTRlMTA4M2Q2NTQ1YzA2OGVjNmJjIiwia3Z1aWQiOjE5MjIyNiwia3ZsYW5nIjoidmktVk4iLCJrdnV0eXBlIjowLCJrdnVsaW1pdCI6IkZhbHNlIiwia3Z1YWRtaW4iOiJUcnVlIiwia3Z1YWN0IjoiVHJ1ZSIsImt2dWxpbWl0dHJhbnMiOiJGYWxzZSIsImt2dXNob3dzdW0iOiJUcnVlIiwia3ZiaSI6IlRydWUiLCJrdmN0eXBlIjozLCJ1c2VCSSI6eyJDdXN0b21lckJJUmVwb3J0X1JlYWQiOltdLCJTYWxlQklSZXBvcnRfUmVhZCI6W10sIlByb2R1Y3RCSVJlcG9ydF9SZWFkIjpbXSwiRmluYW5jZUJJUmVwb3J0X1JlYWQiOltdfSwia3ZiaWQiOjgwOTk0LCJrdnJpbmRpZCI6OCwia3ZyY29kZSI6ImF1dG82Iiwia3ZyaWQiOjM2NDY4OSwia3Z1cmlkIjozNjQ2ODksImt2cmdpZCI6NiwicGVybXMiOiIiLCJrdmJyYW5kaWQiOjF9.H6mQXlZZ5-xR_xxkXprr7ez7lFL-eZF29u_sT2BurCFkFBvhxNpXz_zql-xohhZJ_DnT2px22fWb8RHuyyaemKktASxyLiu-cyfXwPVsvMo-53DzY6L4N_Zw2fARHwngIVflJVnPlM3sKoYlATC9o9Yrp1WmROWMcQR6WsfbjbirpzhNr-tbIwFuP9GFFU7qhLh90NGTTS5SShBV9Yew4Ksnbr9PsfAvNMf934I1pLusqpxEXwbGSxfZSKlujDBW7gXsMYx3Y74DoeUI8xiqKP3mk3C8ZL1zackLhSKysaAMQzgZtqhvEPpAbqVEYi6mf1bNkQfeLpz-mj-9Umpkrg",
    groupId: "6",
    retailerCode: "auto6",
    branchId: "80994"
};

// Headers mặc định cho các request
const getHeaders = () => ({
    "Authorization": `Bearer ${API_CONFIG.token}`,
    "Retailer": API_CONFIG.retailerCode,
    "X-GROUP-ID": API_CONFIG.groupId,
    "X-RETAILER-CODE": API_CONFIG.retailerCode,
    "BranchId": API_CONFIG.branchId,
    "Content-Type": "application/json"
});

// Endpoint cho các API
const ENDPOINTS = {
    products: {
        addMany: `/products/addmany?apiversion=${API_CONFIG.apiVersion}`,
        list: `/products?apiversion=${API_CONFIG.apiVersion}`,
        update: `/products?apiversion=${API_CONFIG.apiVersion}`,
        delete: `/products?apiversion=${API_CONFIG.apiVersion}`
    }
};

module.exports = {
    API_CONFIG,
    getHeaders,
    ENDPOINTS
};
