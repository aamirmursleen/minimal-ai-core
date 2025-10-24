import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [filter, setFilter] = useState("All");
  const addItem = useCartStore(state => state.addItem);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(50),
  });

  const handleAddToCart = (product: any) => {
    const variant = product.node.variants.edges[0].node;
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    });
    toast.success("Added to cart");
  };

  const filters = ["All", "Email", "Social", "CRM"];

  return (
    <section id="products" className="section-padding px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-12 tracking-tight"
        >
          workflows
        </motion.h2>
        
        <div className="flex gap-6 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm pb-2 transition-colors ${
                filter === f
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found</p>
            <p className="text-sm text-muted-foreground">
              Create a product by describing what you'd like to sell
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 6).map((product, index) => (
                <motion.div
                  key={product.node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/product/${product.node.handle}`} className="block">
                    <div className="bg-background rounded-2xl overflow-hidden mb-4 aspect-square hover:scale-[1.02] transition-transform">
                      {product.node.images.edges[0] ? (
                        <img
                          src={product.node.images.edges[0].node.url}
                          alt={product.node.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                    </div>
                  </Link>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Workflow</p>
                    <Link to={`/product/${product.node.handle}`}>
                      <h3 className="font-semibold text-lg group-hover:text-muted-foreground transition-colors">
                        {product.node.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.node.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-semibold">
                        ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        className="bg-accent hover:bg-accent/90"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#products" className="text-sm hover:text-muted-foreground transition-colors">
                View all →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
