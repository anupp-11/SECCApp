



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

  export class News{
    constructor(
        public title: string,
        public subTitle: string,
        public newsSnippet: string,
        public imageUrl: string,
        public newsUrl: string
    )
    {}
  }
  
  export class AuthDetail {
    constructor(
      public name: string,
      public id: string,
      public userName:string,
      public jwtToken:string,
      public email:string
    ) {}
  }