import { useState } from "react";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import productWhey from "@/assets/product-whey.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import productBcaa from "@/assets/product-bcaa.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "protein", name: "Protein" },
    { id: "preworkout", name: "Pre-Workout" },
    { id: "creatine", name: "Creatine" },
    { id: "amino", name: "Amino Acids" },
    { id: "vitamins", name: "Vitamins" },
  ];

  const products = [
    {
      name: "100% Whey Protein Isolate",
      category: "Protein",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 1542,
      image: productWhey,
      badge: "Best Seller",
    },
    {
      name: "Explosive Pre-Workout Formula",
      category: "Pre-Workout",
      price: 39.99,
      rating: 4.6,
      reviews: 892,
      image: productPreworkout,
      badge: "30% OFF",
    },
    {
      name: "Micronized Creatine Monohydrate",
      category: "Creatine",
      price: 29.99,
      rating: 4.9,
      reviews: 2103,
      image: productCreatine,
    },
    {
      name: "BCAA + Recovery Complex",
      category: "Amino Acids",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 673,
      image: productBcaa,
    },
    {
      name: "Premium Whey Protein Blend",
      category: "Protein",
      price: 44.99,
      rating: 4.5,
      reviews: 987,
      image: productWhey,
    },
    {
      name: "Ultra Pre-Workout Extreme",
      category: "Pre-Workout",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 445,
      image: productPreworkout,
      badge: "New",
    },
    {
      name: "Creatine HCL Advanced",
      category: "Creatine",
      price: 39.99,
      rating: 4.6,
      reviews: 332,
      image: productCreatine,
    },
    {
      name: "Essential Amino Energy",
      category: "Amino Acids",
      price: 29.99,
      rating: 4.4,
      reviews: 556,
      image: productBcaa,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || 
      product.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">Our Products</h1>
          <p className="text-xl animate-fade-up animation-delay-200">
            Premium supplements to fuel your fitness journey
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "cta" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all"
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Grid className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-muted-foreground mb-4">
                No products found
              </h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your filters or search query
              </p>
              <Button variant="cta" onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;