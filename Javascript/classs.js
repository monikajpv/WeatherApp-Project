class Product{
    brandname;
    productname;
    pricing;
    rating;

    constructor(brandname,productname,pricing,rating){
        this. brandname=brandname;
        this.productname=productname;
        this.pricing=pricing;
        this.rating=rating;
    }

    display(){
        console.log(this. brandname,this.productname,this.pricing,this.rating);
    }
    changeprice(pricing){
        this.pricing=pricing;


    }

}
var user1= new Product("Apple","iphone-13","70000","4.9");
var user2= new Product("Apple","iphone-9","50000","4.9");

user1.display();
user1.changeprice("80000");

user2.display();

