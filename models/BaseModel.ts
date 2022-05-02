



  export class Address{
    constructor(
     
      public street1:string,
      public street2: string,
      public city: string,
      public state: string,
      public zipCode: string,
      public zipCodeExtension: string,
    
  
    ){}
  }

  export class AuthUserInfo{
    constructor(
      public name:string,
      public email:string,
      public password:string,
      public jwtToken:string,
    ){}
  
  }
  export class RegisterUser{
    constructor(
      public name:string,
      public email:string,
      public password:string,
    ){}
  
  }