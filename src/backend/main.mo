import Map "mo:core/Map";
import Set "mo:core/Set";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import List "mo:core/List";

actor {
  module Product {
    public type Category = {
      #livingRoom;
      #bedroom;
      #office;
      #dining;
    };

    public type Product = {
      id : Text;
      name : Text;
      description : Text;
      price : Float;
      category : Category;
      imageUrl : Text;
      featured : Bool;
    };

    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.id, product2.id);
    };
  };

  module Testimonial {
    public type Testimonial = {
      id : Text;
      customerName : Text;
      review : Text;
      rating : Nat;
    };

    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Text.compare(testimonial1.id, testimonial2.id);
    };
  };

  let products = Map.empty<Text, Product.Product>();
  let testimonials = Map.empty<Text, Testimonial.Testimonial>();
  let newsletterSubscribers = Set.empty<Text>();
  let favorites = Map.empty<Principal, List.List<Text>>();

  public shared ({ caller }) func addProduct(product : Product.Product) : async () {
    if (products.containsKey(product.id)) { Runtime.trap("Product already exists: " # product.id) };
    products.add(product.id, product);
  };

  public query ({ caller }) func getProductsByCategory(category : Product.Category) : async [Product.Product] {
    products.values().filter(
      func(product) {
        product.category == category;
      }
    ).toArray().sort();
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product.Product] {
    products.values().filter(
      func(product) {
        product.featured;
      }
    ).toArray().sort();
  };

  public shared ({ caller }) func addTestimonial(testimonial : Testimonial.Testimonial) : async () {
    if (testimonials.containsKey(testimonial.id)) { Runtime.trap("Testimonial already exists: " # testimonial.id) };
    testimonials.add(testimonial.id, testimonial);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial.Testimonial] {
    testimonials.values().toArray().sort();
  };

  public shared ({ caller }) func subscribeToNewsletter(email : Text) : async () {
    if (newsletterSubscribers.contains(email)) { Runtime.trap("Already subscribed: " # email) };
    newsletterSubscribers.add(email);
  };

  public shared ({ caller }) func addToFavorites(productId : Text) : async () {
    if (not products.containsKey(productId)) { Runtime.trap("Product does not exist") };
    let existingFavorites = switch (favorites.get(caller)) {
      case (null) { List.empty<Text>() };
      case (?favList) { favList };
    };
    if (existingFavorites.contains(productId)) { Runtime.trap("Product already in favorites") };
    existingFavorites.add(productId);
    favorites.add(caller, existingFavorites);
  };

  public shared ({ caller }) func removeFromFavorites(productId : Text) : async () {
    let existingFavorites = switch (favorites.get(caller)) {
      case (null) { Runtime.trap("No favorites found") };
      case (?favList) { favList };
    };
    if (not existingFavorites.contains(productId)) { Runtime.trap("Product not in favorites") };
    let newFavorites = existingFavorites.filter(
      func(fav) {
        fav != productId;
      }
    );
    favorites.add(caller, newFavorites);
  };

  public query ({ caller }) func getFavoriteProducts() : async [Product.Product] {
    switch (favorites.get(caller)) {
      case (null) { [] };
      case (?favList) {
        favList.toArray().map(
          func(productId) {
            switch (products.get(productId)) {
              case (null) { Runtime.trap("Product not found: " # productId) };
              case (?product) { product };
            };
          }
        );
      };
    };
  };
};
