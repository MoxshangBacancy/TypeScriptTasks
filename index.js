"use strict";
// Implementing the PersonInfo object
const person = {
    firstname: "Moxshang",
    lastname: "Shah",
    age: 24,
    address: {
        street: "123 MG Road",
        city: "Ahmedabad",
        pincode: 380001
    },
    contactNumbers: ["9876543210", "9123456789"],
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    },
    getFullAddress() {
        return `${this.address.street}, ${this.address.city} - ${this.address.pincode}`;
    }
};
// 🔽 Testing the methods
console.log("Full Name:", person.getFullName());
console.log("Full Address:", person.getFullAddress());
