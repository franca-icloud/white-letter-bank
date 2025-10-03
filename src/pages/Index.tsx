import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight } from "lucide-react";

const Index = () => {
  const products = [
    { name: "Smartphone Pro", price: "R$ 7.999", color: "Preto espacial" },
    { name: "Smartphone", price: "R$ 5.499", color: "Azul" },
    { name: "Tablet Ultra", price: "R$ 9.999", color: "Prata" },
    { name: "Smartwatch Series", price: "R$ 4.299", color: "Grafite" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-lg font-semibold">Store</span>
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-foreground/80 transition-colors">Produtos</a>
              <a href="#" className="hover:text-foreground/80 transition-colors">Acessórios</a>
              <a href="#" className="hover:text-foreground/80 transition-colors">Suporte</a>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight animate-fade-in">
            Smartphone Pro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Poderoso. Bonito. Durável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full">
              Comprar <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Saiba mais
            </Button>
          </div>
        </div>
        
        {/* Hero Product Visual */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl flex items-center justify-center">
            <div className="w-64 h-96 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-[3rem] shadow-elegant" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Explore toda linha
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground/10 rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/40 rounded-2xl group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{product.color}</p>
                <p className="font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Tecnologia que impressiona
            </h2>
            <p className="text-xl text-muted-foreground">
              Performance excepcional. Design icônico. Experiência única.
            </p>
            <Button className="mt-4 rounded-full">
              Descubra mais <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Store. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
