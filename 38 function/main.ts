function describe_city (city: String, country: String = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berline", "Germany");