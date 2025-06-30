// Importa o tipo Routes do Angular Router, que define a estrutura das rotas da aplicação
import { Routes } from '@angular/router';

// Importa o componente que será exibido quando a rota 'painel-principal' for acessada
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';

// Importa o componente que será exibido quando a rota 'cadastro-produtos' for acessada
import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';

// Define um array de rotas para a aplicação Angular
export const routes: Routes = [
    {
        // Define a rota 'painel-principal'
        path: 'painel-principal',
        // Informa qual componente deve ser exibido quando essa rota for acessada
        component: PainelPrincipal
    },
    {
        // Rota padrão (vazia): será acionada quando o caminho da URL estiver vazio
        path: '',
        // Redireciona automaticamente para a rota '/painel-principal'
        redirectTo: '/painel-principal',
        // Garante que o redirecionamento só ocorra quando o caminho for exatamente vazio (sem correspondências parciais)
        pathMatch: 'full'
    },
    {
        // Define a rota 'cadastro-produtos'
        path: 'cadastro-produtos',
        // Informa qual componente deve ser exibido quando essa rota for acessada
        component: CadastroProduto
    }
];
