import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Truck, CreditCard, Shield, Search, Menu, User, Heart } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Smart TV 55\" 4K Samsung",
      price: "R$ 2.299,00",
      originalPrice: "R$ 2.899,00",
      discount: "21%",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 234
    },
    {
      id: 2,
      name: "Geladeira Brastemp 500L",
      price: "R$ 1.799,00",
      originalPrice: "R$ 2.199,00",
      discount: "18%",
      image: "https://images.unsplash.com/photo-1571175351071-77a2e2d7e5d7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max 256GB",
      price: "R$ 8.999,00",
      originalPrice: "R$ 9.899,00",
      discount: "9%",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 4,
      name: "Notebook Lenovo i7 16GB",
      price: "R$ 3.299,00",
      originalPrice: "R$ 3.899,00",
      discount: "15%",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 312
    },
    {
      id: 5,
      name: "Ar Condicionado Split 12000BTU",
      price: "R$ 1.299,00",
      originalPrice: "R$ 1.599,00",
      discount: "19%",
      image: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 198
    },
    {
      id: 6,
      name: "Máquina de Lavar 11kg Electrolux",
      price: "R$ 1.599,00",
      originalPrice: "R$ 1.899,00",
      discount: "16%",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 267
    }
  ];

  const categories = [
    { name: "Eletrodomésticos", icon: "🏠", count: "2.340" },
    { name: "Celulares", icon: "📱", count: "856" },
    { name: "TVs", icon: "📺", count: "445" },
    { name: "Informática", icon: "💻", count: "1.234" },
    { name: "Móveis", icon: "🛋️", count: "789" },
    { name: "Casa e Construção", icon: "🔨", count: "567" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <div className="text-2xl font-bold text-primary">
                CasasBahia
              </div>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
              </Button>
            </div>
          </div>
          
          {/* Mobile search */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="hover:underline">Departamentos</a>
            <a href="#" className="hover:underline">Ofertas</a>
            <a href="#" className="hover:underline">Black Friday</a>
            <a href="#" className="hover:underline">Cartão CasasBahia</a>
            <a href="#" className="hover:underline">Meus Pedidos</a>
            <a href="#" className="hover:underline">Atendimento</a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="store-gradient text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Black Friday
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Até 70% OFF + Frete Grátis
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Ver Ofertas
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 text-secondary-foreground">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold">Frete Grátis</div>
                <div className="text-sm">Nas compras acima de R$ 199</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-secondary-foreground">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold">Parcelamento</div>
                <div className="text-sm">Em até 24x sem juros</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-secondary-foreground">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold">Compra Segura</div>
                <div className="text-sm">Seus dados protegidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="store-card cursor-pointer text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} produtos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary-foreground">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="store-card group cursor-pointer">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                    -{product.discount}
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {product.price}
                    </div>
                    <div className="text-sm text-green-600">
                      ou 10x de {(parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')) / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                  </div>
                  <Button className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-gradient py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cartão CasasBahia</h2>
          <p className="text-xl mb-6">Tenha desconto exclusivo e parcele sem juros</p>
          <Button size="lg" variant="secondary">
            Peça o Seu
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Institucional</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Quem Somos</a></li>
                <li><a href="#" className="hover:underline">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:underline">Investidores</a></li>
                <li><a href="#" className="hover:underline">Sustentabilidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Atendimento</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Central de Ajuda</a></li>
                <li><a href="#" className="hover:underline">Fale Conosco</a></li>
                <li><a href="#" className="hover:underline">Meus Pedidos</a></li>
                <li><a href="#" className="hover:underline">Trocas e Devoluções</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Cartão CasasBahia</a></li>
                <li><a href="#" className="hover:underline">Seguro</a></li>
                <li><a href="#" className="hover:underline">Garantia Estendida</a></li>
                <li><a href="#" className="hover:underline">Vale Presente</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Baixe o App</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <div className="mr-3">📱</div>
                  <div>
                    <div className="text-xs">Baixar na</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="mr-3">🤖</div>
                  <div>
                    <div className="text-xs">Disponível no</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CasasBahia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
