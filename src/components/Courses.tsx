import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const Courses = () => {
  const addItem = useCartStore(state => state.addItem);
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetchProducts(50),
  });

  const handleEnroll = (product: any) => {
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

  if (products.length === 0) return null;

  return (
    <section id="courses" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-12 tracking-tight"
        >
          courses
        </motion.h2>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        ) : (
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="flex gap-6 pb-4">
              {products.slice(0, 4).map((product, index) => (
                <motion.div
                  key={product.node.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 bg-background rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video bg-secondary">
                    {product.node.images.edges[0] && (
                      <img
                        src={product.node.images.edges[0].node.url}
                        alt={product.node.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs text-muted-foreground">Expert Instructor</p>
                    <h3 className="font-semibold text-lg">{product.node.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>1,234 students</span>
                      <span>•</span>
                      <span>★★★★★</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-semibold">
                        ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </span>
                      <Button
                        onClick={() => handleEnroll(product)}
                        className="bg-accent hover:bg-accent/90"
                      >
                        Enroll
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
