# Build stage
FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run stage
FROM node:alpine
WORKDIR /app
# COPY --from=builder /app/next.config.js .
COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Expose the listening port
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "start" ]                                                                                                                          