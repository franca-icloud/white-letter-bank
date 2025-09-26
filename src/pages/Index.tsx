import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star, Shield, Truck } from "lucide-react";

const Index = () => {
  const whatsappNumber = "5511968394057";
  
  const contactWhatsApp = (model: string) => {
    const message = `Olá! Tenho interesse no ${model}. Poderia me dar mais informações?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const iphones = [
    {
      id: 1,
      model: "iPhone 15 Pro Max",
      storage: "256GB",
      color: "Titânio Natural",
      price: "R$ 8.999",
      originalPrice: "R$ 9.499",
      image: "📱",
      features: ["Chip A17 Pro", "Câmera 48MP", "ProRAW", "Zoom 5x"],
      rating: 5
    },
    {
      id: 2,
      model: "iPhone 15 Pro",
      storage: "128GB", 
      color: "Titânio Azul",
      price: "R$ 7.299",
      originalPrice: "R$ 7.799",
      image: "📱",
      features: ["Chip A17 Pro", "Câmera 48MP", "ProRAW", "Zoom 3x"],
      rating: 5
    },
    {
      id: 3,
      model: "iPhone 15",
      storage: "128GB",
      color: "Azul",
      price: "R$ 5.999",
      originalPrice: "R$ 6.299",
      image: "📱",
      features: ["Chip A16", "Câmera 48MP", "USB-C", "Ceramic Shield"],
      rating: 4
    },
    {
      id: 4,
      model: "iPhone 14",
      storage: "128GB",
      color: "Roxo",
      price: "R$ 4.699",
      originalPrice: "R$ 5.199",
      image: "📱",
      features: ["Chip A15", "Câmera 12MP", "Face ID", "5G"],
      rating: 4
    },
    {
      id: 5,
      model: "iPhone 13",
      storage: "128GB",
      color: "Rosa",
      price: "R$ 3.999",
      originalPrice: "R$ 4.399",
      image: "📱",
      features: ["Chip A15", "Câmera 12MP", "Face ID", "5G"],
      rating: 4
    },
    {
      id: 6,
      model: "iPhone SE",
      storage: "64GB",
      color: "Preto",
      price: "R$ 2.699",
      originalPrice: "R$ 2.999",
      image: "📱",
      features: ["Chip A15", "Touch ID", "Câmera 12MP", "Compacto"],
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">📱 iPhone Store</h1>
            <Button 
              onClick={() => contactWhatsApp("iPhone")}
              className="bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            iPhones Originais
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Encontre o iPhone perfeito para você com os melhores preços e garantia oficial Apple
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="text-green-500" size={16} />
              <span>Garantia Oficial</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-blue-500" size={16} />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" size={16} />
              <span>Melhor Preço</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iphones.map((iphone) => (
              <Card key={iphone.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{iphone.image}</div>
                  <CardTitle className="text-xl">{iphone.model}</CardTitle>
                  <CardDescription className="text-sm">
                    {iphone.storage} • {iphone.color}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < iphone.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {iphone.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold text-primary">{iphone.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{iphone.originalPrice}</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">💰 Economize até R$ 500!</p>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={() => contactWhatsApp(iphone.model)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 group-hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={18} />
                    Comprar via WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">Entre em contato</h4>
          <p className="text-muted-foreground mb-6">
            Dúvidas? Fale conosco pelo WhatsApp e tire todas as suas dúvidas!
          </p>
          <Button 
            onClick={() => contactWhatsApp("informações gerais")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white gap-3"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            © 2024 iPhone Store - Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => contactWhatsApp("atendimento")}
          size="icon"
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
