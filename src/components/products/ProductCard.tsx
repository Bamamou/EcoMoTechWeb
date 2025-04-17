
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type Product } from "@/utils/productData";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Specifications</h4>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(product.specifications).map(([key, value]) => (
                <React.Fragment key={key}>
                  <dt className="text-gray-600">{key}:</dt>
                  <dd className="font-medium">{value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
