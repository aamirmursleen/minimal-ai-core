import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { handle } = useParams();
  const addItem = useCartStore(state => state.addItem);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(50),
  });

  const product = products.find((p) => p.node.handle === handle);

  const handleAddToCart = () => {
    if (!product) return;
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

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.a>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-square bg-secondary rounded-3xl overflow-hidden">
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  Workflow
                </p>
                <h1 className="text-4xl font-semibold tracking-tight mb-4">
                  {product.node.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.node.description}
                </p>
              </div>
              
              <div className="border-t border-b border-border py-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">
                    ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">
                    {product.node.priceRange.minVariantPrice.currencyCode}
                  </span>
                </div>
              </div>
              
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
              >
                Add to Cart
              </Button>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Instant Access</p>
                    <p className="text-sm text-muted-foreground">
                      Start using immediately after purchase
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">No Code Required</p>
                    <p className="text-sm text-muted-foreground">
                      Simple setup, no technical skills needed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-sm text-muted-foreground">
                      Get help whenever you need it
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
