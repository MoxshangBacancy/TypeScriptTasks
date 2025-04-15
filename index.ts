interface Address {
    street: string;
    city: string;
    pincode: number;
  }
  
  interface PersonInfo {
    firstname: string;
    lastname: string;
    age: number;
    address: Address;
    contactNumbers: string[];
  
    getFullName(): string;
    getFullAddress(): string;
  }
  
  const person: PersonInfo = {
    firstname: "Moxshang",
    lastname: "Shah",
    age: 24,
    address: {
      street: "123 MG Road",
      city: "Ahmedabad",
      pincode: 380001
    },
    contactNumbers: ["9876543210", "9123456789"],
  
    getFullName(): string {
      return `${this.firstname} ${this.lastname}`;
    },
  
    getFullAddress(): string {
      return `${this.address.street}, ${this.address.city} - ${this.address.pincode}`;
    }
  };
  
  console.log("Full Name:", person.getFullName());
  console.log("Full Address:", person.getFullAddress());
  