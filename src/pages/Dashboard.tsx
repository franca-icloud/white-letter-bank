import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XpaLogo } from "@/components/XpaLogo";
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Settings, 
  Shield,
  Eye,
  EyeOff,
  LogOut
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const balance = 15750.80;

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
    navigate("/");
  };

  const recentTransactions = [
    { id: 1, type: "credit", description: "Transferência recebida", amount: 2500.00, date: "Hoje" },
    { id: 2, type: "debit", description: "Pagamento cartão", amount: -85.50, date: "Ontem" },
    { id: 3, type: "credit", description: "Depósito", amount: 1200.00, date: "02/01" },
    { id: 4, type: "debit", description: "Transferência enviada", amount: -350.00, date: "01/01" },
  ];

  return (
    <div className="min-h-screen bg-banking-gradient">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <XpaLogo size="md" />
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/change-password")}
              className="text-foreground hover:text-banking-accent transition-banking"
            >
              <Shield className="h-4 w-4 mr-2" />
              Alterar Senha
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-foreground hover:text-destructive transition-banking"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Balance Card */}
          <div className="lg:col-span-2">
            <Card className="banking-card border-border p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Saldo da Conta</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-muted-foreground hover:text-foreground transition-banking"
                >
                  {showBalance ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="text-3xl font-bold text-banking-accent mb-2">
                {showBalance ? `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : "R$ •••••••"}
              </div>
              <p className="text-muted-foreground">Conta Corrente</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button className="bg-banking-accent hover:bg-banking-accent/90 text-white transition-banking">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Transferir
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary transition-banking">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Cartões
                </Button>
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="banking-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Transações Recentes</h3>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'credit' 
                          ? 'bg-banking-success/20 text-banking-success' 
                          : 'bg-destructive/20 text-destructive'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{transaction.description}</p>
                        <p className="text-muted-foreground text-sm">{transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-banking-success' : 'text-destructive'
                    }`}>
                      {transaction.type === 'credit' ? '+' : ''}
                      R$ {Math.abs(transaction.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="banking-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:bg-secondary transition-banking"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Configurações de Segurança
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:bg-secondary transition-banking"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Gerenciar Cartões
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:bg-secondary transition-banking"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Preferências
                </Button>
              </div>
            </Card>

            {/* Account Info */}
            <Card className="banking-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Informações da Conta</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Agência</p>
                  <p className="text-foreground font-medium">0001</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Conta</p>
                  <p className="text-foreground font-medium">123456-7</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tipo</p>
                  <p className="text-foreground font-medium">Conta Corrente</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;