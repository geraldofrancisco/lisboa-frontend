# ==========================================
# STAGE 1: Compilação e Build da Aplicação
# ==========================================
FROM node:22-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências primeiro (aproveita cache do Docker)
COPY package*.json ./

# Instala as dependências (usando --legacy-peer-deps se necessário)
RUN npm ci --legacy-peer-deps

# Copia o restante do código fonte
COPY . .

# Executa o build de produção do Angular
RUN npm run build -- --configuration=production

# ==========================================
# STAGE 2: Servidor Nginx para Produção
# ==========================================
FROM nginx:alpine

# Copia a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados do Stage de build para o diretório padrão do Nginx
# Nota: No Angular 21, o output fica dentro de /dist/<nome-do-projeto>/browser
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]